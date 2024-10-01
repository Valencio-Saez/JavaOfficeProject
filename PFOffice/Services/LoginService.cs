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
        // TODO: Make this method check the password with what is in the database
        if (admin == null)
        {
            return LoginStatus.IncorrectPassword;
        }


        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);
        if (admin.Password == encryptedPassword)
        {
            // Password matches
            return LoginStatus.Success;
        }

        return LoginStatus.IncorrectPassword;
    }
}

