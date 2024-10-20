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
    public LoginController(ILoginService loginService)
    {
        _loginService = loginService;
    }

    [HttpPost("AdminLogin")]
    public async Task<IActionResult> AdminLogin([FromBody] LoginBody loginBody)
    {
        if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
            return BadRequest("Invalid login request");

        var result = await Task.Run(() => _loginService.CheckAdminPassword(loginBody.UserName, loginBody.Password));

        if (result == LoginStatus.IncorrectUsername)
        {
            return Unauthorized("Incorrect username");
        }

        if (result == LoginStatus.IncorrectPassword)
        {
            return Unauthorized("Incorrect password");
        }

        if (result == LoginStatus.Success)
        {
            HttpContext.Session.SetString("adminLoggedIn", loginBody.UserName);
            return Ok($"Admin {loginBody.UserName} logged in");
        }

        return Unauthorized("Incorrect password");
    }

    [HttpPost("UserLogin")]
    public async Task<IActionResult> UserLogin([FromBody] LoginBody UserloginBody)
    {
        if (UserloginBody == null || string.IsNullOrEmpty(UserloginBody.UserName) || string.IsNullOrEmpty(UserloginBody.Password))
            return BadRequest("Invalid login request");

        var result = await Task.Run(() => _loginService.CheckUserPassword(UserloginBody.UserName, UserloginBody.Password));

        if (result == LoginStatus.IncorrectUsername)
        {
            return Unauthorized("Incorrect username");
        }

        if (result == LoginStatus.IncorrectPassword)
        {
            return Unauthorized("Incorrect password");
        }

        if (result == LoginStatus.Success)
        {
            HttpContext.Session.SetString("userLoggedIn", UserloginBody.UserName);
            return Ok($"User {UserloginBody.UserName} logged in");
        }

        return Unauthorized("Incorrect password");
    }

    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterBody registerBody)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("Invalid registration request");
        }

        var user = await _loginService.RegisterUserAsync(registerBody);

        return CreatedAtAction("Register", user);
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

    [HttpGet("AdminLogout")]
    public IActionResult AdminLogout()
    {
        HttpContext.Session.Remove("adminLoggedIn");
        return Ok("Logged out");
    }

    [HttpGet("userLogout")]
    public IActionResult UserLogout()
    {
        HttpContext.Session.Remove("userLoggedIn");
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