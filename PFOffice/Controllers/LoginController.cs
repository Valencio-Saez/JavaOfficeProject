using System.Text;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;
using Microsoft.AspNetCore.Http;

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

    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] LoginBody loginBody)
    {
        if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
            return BadRequest(new { message = "Invalid login request" });

        var result = await _loginService.CheckPassword(loginBody.UserName, loginBody.Password);

        if (result == LoginStatus.IncorrectUsername)
        {
            return Unauthorized(new { message = "Incorrect username" });
        }

        if (result == LoginStatus.IncorrectPassword)
        {
            return Unauthorized(new { message = "Incorrect password" });
        }

        if (result == LoginStatus.Success)
        {
            if (loginBody.UserName == "admin1")
            {
                HttpContext.Session.SetString("adminLoggedIn", loginBody.UserName);
                return Ok(new { message = $"Admin {loginBody.UserName} logged in" });
            }
            HttpContext.Session.SetString("userLoggedIn", loginBody.UserName);
            return Ok(new { message = $"User {loginBody.UserName} logged in" });
        }

        return Unauthorized(new { message = "Login failed" });
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
        return Ok(HttpContext.Session.GetString("adminLoggedIn") != null);
    }

    [HttpGet("IsUserLoggedIn")]
    public IActionResult IsUserLoggedIn()
    {
        return Ok(HttpContext.Session.GetString("userLoggedIn") != null);
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

    [HttpGet("AdminDashboard")]
    public IActionResult AdminDashboard()
    {
        if (IsAdminLoggedIn() == null)
        {
            return Unauthorized("Access denied. Admin login required.");
        }

        return Ok("Welcome to the admin dashboard!");
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