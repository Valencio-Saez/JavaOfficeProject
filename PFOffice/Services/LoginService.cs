using StarterKit.Controllers;
using StarterKit.Models;
using StarterKit.Utils;
using Microsoft.EntityFrameworkCore;

namespace StarterKit.Services;

public enum LoginStatus { IncorrectPassword, IncorrectUsername, IncorrectEmail, Success }
public enum RegisterStatus { IncorrectPassword, IncorrectUsername, IncorrectEmail, InvalidFirstName, InvalidLastName, Success }
public enum ADMIN_SESSION_KEY { adminLoggedIn }

public class LoginService : ILoginService
{
    private readonly DatabaseContext _context;

    public LoginService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<LoginStatus> CheckPassword(string username, string inputPassword)
    {
        // Check Admin table
        var admin = await _context.Admin.FirstOrDefaultAsync(a => a.UserName == username);
        if (admin != null)
        {
            string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);
            if (admin.Password == encryptedPassword) // Replace with proper password hashing and comparison
            {
                return LoginStatus.Success;
            }
            return LoginStatus.IncorrectPassword;
        }

        // Check User table
        var user = await _context.User.FirstOrDefaultAsync(u => u.UserName == username);
        if (user != null)
        {
            string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);
            if (user.Password == encryptedPassword) // Replace with proper password hashing and comparison
            {
                return LoginStatus.Success;
            }
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.IncorrectUsername;
    }

    public async Task<User> RegisterUserAsync(RegisterBody registerBody)
    {
        var user = new User
        {
            UserName = registerBody.UserName,
            Email = registerBody.Email,
            FirstName = registerBody.FirstName,
            LastName = registerBody.LastName,
            Password = EncryptionHelper.EncryptPassword(registerBody.Password),
            RecuringDays = "",
            Attendances = new List<Attendance>(),
            Event_Attendances = new List<Event_Attendance>()
        };

        _context.User.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
}
