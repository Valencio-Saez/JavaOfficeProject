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

    public LoginStatus CheckPassword(string username, string inputPassword)
    {
        var admin = _context.Admin.FirstOrDefault(a => a.UserName == username);
        var user = _context.User.FirstOrDefault(u => u.UserName == username);

        if (admin == null || user == null)
        {
            return LoginStatus.IncorrectEmail;
        }
        if (username != admin.UserName || username != user.UserName)
        {
            return LoginStatus.IncorrectUsername;
        }
        string encryptedPassword = EncryptionHelper.EncryptPassword(inputPassword);

        if (admin.Password != encryptedPassword || user.Password != encryptedPassword)
        {
            return LoginStatus.IncorrectPassword;
        }

        return LoginStatus.Success;
    }

    public RegisterStatus CheckRegister(string username, string email, string password, string firstname, string lastname)
    {
        var user = _context.User.FirstOrDefault(u => u.Email == email);

        if (user != null)
        {
            return RegisterStatus.IncorrectEmail;
        }

        string encryptedPassword = EncryptionHelper.EncryptPassword(password);

        if (encryptedPassword == null)
        {
            return RegisterStatus.IncorrectPassword;
        }

        if (username == null)
        {
            return RegisterStatus.IncorrectUsername;
        }

        if (email == null)
        {
            return RegisterStatus.IncorrectEmail;
        }

        if (firstname == null)
        {
            return RegisterStatus.InvalidFirstName;
        }
        if (lastname == null)
        {
            return RegisterStatus.InvalidLastName;
        }

        return RegisterStatus.Success;
    }
}
