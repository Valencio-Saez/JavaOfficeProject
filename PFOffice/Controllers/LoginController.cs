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

// using System.Text;
// using Microsoft.AspNetCore.Mvc;
// using StarterKit.Services;

// namespace StarterKit.Controllers;


// [Route("api/v1/Login")]
// public class LoginController : Controller
// {
//     private readonly ILoginService _loginService;
//     private bool isLoggedIn;
//     public LoginController(ILoginService loginService)
//     {
//         _loginService = loginService;
//     }

//     [HttpPost("Login")]
//     public IActionResult Login([FromBody] LoginBody loginBody)
//     {
//         if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
//             return BadRequest("Invalid login request");

//         var result = _loginService.CheckPassword(loginBody.UserName, loginBody.Password);

//         if (result == LoginStatus.IncorrectUsername)
//         {
//             return Unauthorized("Incorrect username");
//         }

//         if (result == LoginStatus.IncorrectPassword)
//         {
//             return Unauthorized("Incorrect password");
//         }

//         if (result == LoginStatus.Success)
//         {
//             if (loginBody.UserName.Length >= 5 && loginBody.UserName.Substring(0, 5) == "admin")
//             {
//                 HttpContext.Session.SetString("adminLoggedIn", loginBody.UserName);
//                 Console.WriteLine($"Admin {loginBody.UserName} logged in. Session ID: {HttpContext.Session.Id}");
//                 return Ok(new { Message = $"Admin {loginBody.UserName} logged in", SessionId = HttpContext.Session.Id });
//             }
//             else
//             {
//                 HttpContext.Session.SetString("userLoggedIn", loginBody.UserName);
//                 Console.WriteLine($"User {loginBody.UserName} logged in. Session ID: {HttpContext.Session.Id}");
//                 return Ok(new { Message = $"User {loginBody.UserName} logged in", SessionId = HttpContext.Session.Id });
//             }
//         }

//         return Unauthorized("Incorrect password");
//     }

//     // [HttpPost("Login")]
//     // public IActionResult Login([FromBody] LoginBody loginBody)
//     // {
//     //     if (loginBody == null || string.IsNullOrEmpty(loginBody.UserName) || string.IsNullOrEmpty(loginBody.Password))
//     //         return BadRequest("Invalid login request");

//     //     var result = _loginService.CheckPassword(loginBody.UserName, loginBody.Password);

//     //     if (result == LoginStatus.IncorrectUsername)
//     //     {
//     //         return Unauthorized("Incorrect ");
//     //     }

//     //     if (result == LoginStatus.IncorrectPassword)
//     //     {
//     //         return Unauthorized("Incorrect password");
//     //     }

//     //     if (result == LoginStatus.Success)
//     //     {
//     //         if (loginBody.UserName.Length >= 5 && loginBody.UserName.Substring(0, 5) == "admin")
//     //         {
//     //             HttpContext.Session.SetString("adminLoggedIn", loginBody.UserName);
//     //             // return Ok($"User {loginBody.UserName} logged in");
//     //             return Ok(new { Message = $"Admin {loginBody.UserName} logged in", SessionId = HttpContext.Session.Id });
//     //         }
//     //         else
//     //         {
//     //             HttpContext.Session.SetString("userLoggedIn", loginBody.Password);
//     //             // return Ok($"User {loginBody.UserName} logged in");
//     //             return Ok(new { Message = $"User {loginBody.UserName} logged in", SessionId = HttpContext.Session.Id });
//     //         }
//     //     }

//     //     return Unauthorized("Incorrect password");
//     // }

//     [HttpPost("Register")]
//     public IActionResult Register([FromBody] RegisterBody registerBody)
//     {
//         if (registerBody == null || string.IsNullOrEmpty(registerBody.UserName) || string.IsNullOrEmpty(registerBody.Password) || string.IsNullOrEmpty(registerBody.Email) || string.IsNullOrEmpty(registerBody.FirstName) || string.IsNullOrEmpty(registerBody.LastName))
//             return BadRequest("Invalid register request");

//         var result = _loginService.CheckRegister(registerBody.UserName, registerBody.Email, registerBody.Password, registerBody.FirstName, registerBody.LastName);

//         if (result == RegisterStatus.Success)
//         {
//             // Opslaan in DB
//             return Ok("User registered");
//         }

//         if (result == RegisterStatus.IncorrectEmail)
//         {
//             return BadRequest("Email already in use");
//         }

//         if (result == RegisterStatus.IncorrectPassword)
//         {
//             return BadRequest("Invalid password");
//         }

//         if (result == RegisterStatus.IncorrectUsername)
//         {
//             return BadRequest("Invalid username");
//         }

//         if (result == RegisterStatus.InvalidFirstName)
//         {
//             return BadRequest("Invalid first name");
//         }

//         if (result == RegisterStatus.InvalidLastName)
//         {
//             return BadRequest("Invalid last name");
//         }

//         return BadRequest("Invalid register request");

//     }

//     [HttpGet("IsAdminLoggedIn")]
//     public IActionResult IsAdminLoggedIn()
//     {
//         isLoggedIn = HttpContext.Session.GetString("adminLoggedIn") != null;
//         return Ok(isLoggedIn);
//     }

//     [HttpGet("Logout")]
//     public IActionResult Logout()
//     {
//         HttpContext.Session.Remove("adminLoggedIn");
//         return Ok("Logged out");
//     }

// }

// public class LoginBody
// {
//     public string? UserName { get; set; }
//     public string? Password { get; set; }
// }

// public class RegisterBody
// {
//     public string UserName { get; set; }
//     public string Email { get; set; }
//     public string Password { get; set; }
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
// }