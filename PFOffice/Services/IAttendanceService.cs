using System.Threading.Tasks;
using StarterKit.Controllers;
using StarterKit.Models;

namespace StarterKit.Services
{
    public interface IAttendanceService
    {
        Task<(bool Success, string Message)> AddAttendanceAsync(AttendenceBody attendenceBody);
        Task<(bool Success, string Message)> UpdateAttendanceAsync(AttendenceBody attendenceBody);
        Task<bool> DeleteAttendanceAsync(int attendanceId);
       Task<List<AttendeeDto>> GetAttendeesAsync(int eventId);
    }
}