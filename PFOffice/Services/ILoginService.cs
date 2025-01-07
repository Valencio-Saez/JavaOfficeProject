using StarterKit.Models;
using StarterKit.Controllers;

namespace StarterKit.Services;

public interface ILoginService
{
    Task<LoginStatus> CheckPassword(string username, string inputPassword);
    // Task<LoginStatus> CheckUserPassword(string username, string inputPassword);
    Task<User> RegisterUserAsync(RegisterBody registerBody);
}