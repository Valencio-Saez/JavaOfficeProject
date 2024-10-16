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
        if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
            return BadRequest("Invalid login request");

        var result = _loginService.CheckPassword(loginBody.UserName, loginBody.Password);

        if (result == LoginStatus.IncorrectEmail)
        {
            return Unauthorized("Incorrect ");
        }

        if (result == LoginStatus.IncorrectPassword)
        {
            return Unauthorized("Incorrect password");
        }

        if (result == LoginStatus.Success)
        {
            if (loginBody.UserName.Substring(0, 4) == "admin")
            {
                HttpContext.Session.SetString("adminLoggedIn", loginBody.Password);
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
    public string? UserName { get; set; }
    public string? Password { get; set; }
}
