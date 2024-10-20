using StarterKit.Controllers;
using StarterKit.Models;
using StarterKit.Utils;

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

    public async Task<LoginStatus> CheckAdminPassword(string username, string inputPassword)
    {
        var admin = _context.Admin.FirstOrDefault(a => a.UserName == username);

        if (admin == null)
        {
            return LoginStatus.IncorrectUsername;
        }

        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);

        if (admin.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.Success;
    }

    public async Task<LoginStatus> CheckUserPassword(string username, string inputPassword)
    {
        var user = _context.User.FirstOrDefault(u => u.UserName == username);

        if (user == null)
        {
            return LoginStatus.IncorrectUsername;
        }

        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);

        if (user.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.Success;
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
