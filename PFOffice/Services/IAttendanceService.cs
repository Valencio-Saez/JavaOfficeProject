using System.Threading.Tasks;
using StarterKit.Controllers;

namespace StarterKit.Services
{
    public interface IAttendanceService
    {
        Task<(bool Success, string Message)> AddAttendanceAsync(AttendenceBody attendenceBody);
        Task<(bool Success, string Message)> UpdateAttendanceAsync(int userId, int attendanceId, DateTime newDate);
        Task<bool> DeleteAttendanceAsync(int userId, int attendanceId);
    }
}