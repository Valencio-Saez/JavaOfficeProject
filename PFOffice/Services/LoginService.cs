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
        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);
        // TODO: Make this method check the password with what is in the database
        if (admin.UserName == null || admin.UserName != username)
        {
            return LoginStatus.IncorrectUsername;
        }
        if (admin.Password == null || admin.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }
        if (admin.Password == encryptedPassword && admin.UserName == username)
        {
            return LoginStatus.Success;
        }
        return LoginStatus.IncorrectPassword;
    }
}

