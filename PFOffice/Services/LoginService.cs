using StarterKit.Models;
using StarterKit.Utils;

namespace StarterKit.Services;

public enum LoginStatus { IncorrectPassword, IncorrectUsername, IncorrectEmail, Success }

public enum ADMIN_SESSION_KEY { adminLoggedIn }


public class LoginService : ILoginService
{

    private readonly DatabaseContext _context;

    public LoginService(DatabaseContext context)
    {
        _context = context;
    }

    public LoginStatus CheckPassword(string username, string inputPassword)
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

    public LoginStatus CheckUserPassword(string email, string inputPassword)
    {
        var user = _context.User.FirstOrDefault(a => a.Email == email);

        if (user == null)
        {
            return LoginStatus.IncorrectEmail;
        }

        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);

        if (user.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.Success;
    }
}

