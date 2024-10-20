using System.Text;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;

namespace StarterKit.Controllers;


[Route("api/v1/Login")]
public class LoginController : Controller
{
    private readonly ILoginService _loginService;
    private readonly DatabaseContext _context;
    private bool isLoggedIn;
    public LoginController(ILoginService loginService, DatabaseContext _context)
    {
        _loginService = loginService;
        _context = _context;
    }

    [HttpPost("Login")]
    public IActionResult Login([FromBody] LoginBody loginBody)
    {
        if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
            return BadRequest("Invalid login request");

        var result = _loginService.CheckPassword(loginBody.UserName, loginBody.Password);

        if (result == LoginStatus.IncorrectUsername)
        {
            return Unauthorized("Incorrect ");
        }

        if (result == LoginStatus.IncorrectPassword)
        {
            return Unauthorized("Incorrect password");
        }

        if (result == LoginStatus.Success)
        {
            if (loginBody.UserName.Length >= 5 && loginBody.UserName.Substring(0, 5) == "admin")
            {
                HttpContext.Session.SetString("adminLoggedIn", loginBody.UserName);
                return Ok($"User {loginBody.UserName} logged in");
            }
            else
            {
                HttpContext.Session.SetString("userLoggedIn", loginBody.Password);
                return Ok($"User {loginBody.UserName} logged in");
            }
        }

        return Unauthorized("Incorrect password");
    }

    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterBody registerBody)
    {
        if (registerBody == null || string.IsNullOrEmpty(registerBody.UserName) || string.IsNullOrEmpty(registerBody.Password) || string.IsNullOrEmpty(registerBody.Email) || string.IsNullOrEmpty(registerBody.FirstName) || string.IsNullOrEmpty(registerBody.LastName))
            return BadRequest("Invalid register request");

        var result = _loginService.CheckRegister(registerBody.UserName, registerBody.Email, registerBody.Password, registerBody.FirstName, registerBody.LastName);

        if (result == RegisterStatus.IncorrectEmail)
        {
            return BadRequest("Email already in use");
        }

        if (result == RegisterStatus.IncorrectPassword)
        {
            return BadRequest("Invalid password");
        }

        if (result == RegisterStatus.IncorrectUsername)
        {
            return BadRequest("Invalid username");
        }

        if (result == RegisterStatus.InvalidFirstName)
        {
            return BadRequest("Invalid first name");
        }

        if (result == RegisterStatus.InvalidLastName)
        {
            return BadRequest("Invalid last name");
        }
        if (result == RegisterStatus.Success)
        {
            _context.User.Add(new User
            {
                UserName = registerBody.UserName,
                Email = registerBody.Email,
                Password = registerBody.Password,
                FirstName = registerBody.FirstName,
                LastName = registerBody.LastName,
                RecuringDays = "",
                Attendances = new List<Attendance>(),
                Event_Attendances = new List<Event_Attendance>()

            });
            await _context.SaveChangesAsync();
            return Ok("User registered");
        }
        return BadRequest("Invalid register request");

    }

    [HttpGet("IsAdminLoggedIn")]
    public IActionResult IsAdminLoggedIn()
    {
        isLoggedIn = HttpContext.Session.GetString("adminLoggedIn") != null;
        return Ok(isLoggedIn);
    }

    [HttpGet("IsUserLoggedIn")]
    public IActionResult IsUserLoggedIn()
    {
        isLoggedIn = HttpContext.Session.GetString("userLoggedIn") != null;
        return Ok(isLoggedIn);
    }

    [HttpGet("Logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Remove("adminLoggedIn");
        return Ok("Logged out");
    }

}

public class LoginBody
{
    public string? UserName { get; set; }
    public string? Password { get; set; }
}

public class RegisterBody
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}