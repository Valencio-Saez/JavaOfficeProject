using StarterKit.Models;
using StarterKit.Utils;

namespace StarterKit.Services;

public enum LoginStatus { IncorrectPassword, IncorrectUsername, Success }

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
}

