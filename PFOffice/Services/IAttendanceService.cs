using System.Threading.Tasks;

namespace StarterKit.Services
{
    public interface IAttendanceService
    {
        Task<(bool Success, string Message)> AddAttendanceAsync(int userId, int eventId);
        Task<(bool Success, string Message)> UpdateAttendanceAsync(int userId, int attendanceId, DateTime newDate);
        Task<bool> DeleteAttendanceAsync(int userId, int attendanceId);
    }
}