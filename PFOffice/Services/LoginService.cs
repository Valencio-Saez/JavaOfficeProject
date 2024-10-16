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

    public LoginStatus CheckPassword(string email, string inputPassword)
    {
        var admin = _context.Admin.FirstOrDefault(a => a.Email == email);
        var user = _context.User.FirstOrDefault(u => u.Email == email);

        if (admin == null)
        {
            return LoginStatus.IncorrectEmail;
        }
        if (email != admin.Email || email != user.Email)
        {
            return LoginStatus.IncorrectEmail;
        }
        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);

        if (admin.Password != encryptedPassword || user.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.Success;
    }

}

