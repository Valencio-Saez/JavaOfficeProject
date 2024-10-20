namespace StarterKit.Services;

public interface ILoginService
{
    public LoginStatus CheckPassword(string username, string inputPassword);
    public RegisterStatus CheckRegister(string username, string email, string password, string FirstName, string LastName);
    Task<bool> AddUser(string username, string email, string password, string FirstName, string LastName);
}