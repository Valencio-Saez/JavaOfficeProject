using System.Text;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Services;

namespace StarterKit.Controllers;


[Route("api/v1/Login")]
public class LoginController : Controller
{
    private readonly ILoginService _loginService;
    // var optionsBuilder = new DbContextOptionsBuilder<DatabaseContext>();
    private bool isLoggedIn;
    public LoginController(ILoginService loginService)
    {
        _loginService = loginService;
    }

    [HttpPost("Login")]
    public IActionResult Login([FromBody] LoginBody loginBody)
    {
        if loginBody.
        if (loginBody == null || string.IsNullOrEmpty(loginBody.Username) || string.IsNullOrEmpty(loginBody.Password))
            return BadRequest("Invalid login request");

        var result = _loginService.CheckPassword(loginBody.Username, loginBody.Password);

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
            HttpContext.Session.SetString("adminLoggedIn", loginBody.Username);
            return Ok($"User {loginBody.Username} logged in");
        }

        return Unauthorized("Incorrect password");
    }

    [HttpGet("IsAdminLoggedIn")]
    public IActionResult IsAdminLoggedIn()
    {
        isLoggedIn = HttpContext.Session.GetString("adminLoggedIn") != null;
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
    public string? Username { get; set; }
    public string? Password { get; set; }
}
