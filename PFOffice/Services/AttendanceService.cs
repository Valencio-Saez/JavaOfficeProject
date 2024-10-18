using System.Threading.Tasks;
using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace StarterKit.Services
{
    public class AttendanceService : IAttendanceService
    {
        private readonly DatabaseContext _context;


        public AttendanceService(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<(bool Success, string Message)> AddAttendanceAsync(int userId, int eventId)
        {
            var user = await _context.User.FindAsync(userId);
            var eventEntity = await _context.Event.FindAsync(eventId);

            if (user == null || eventEntity == null)
            {
                return (false, "User or event not found.");
            }

            _context.Attendance.Add(new Attendance
            {
                User = user,
                AttendanceDate = DateTime.Now
            });

            await _context.SaveChangesAsync();
            return (true, "Attendance added successfully.");
        }

        public async Task<(bool Success, string Message)> UpdateAttendanceAsync(int userId, int attendanceId, DateTime newDate)
        {
            var attendance = await _context.Attendance
                .FirstOrDefaultAsync(a => a.AttendanceId == attendanceId && a.User.UserId == userId);

            if (attendance == null)
            {
                return (false, "Attendance not found or user not authorized.");
            }

            attendance.AttendanceDate = newDate;
            await _context.SaveChangesAsync();
            return (true, "Attendance updated successfully.");
        }

        public async Task<bool> DeleteAttendanceAsync(int userId, int attendanceId)
        {
            var attendance = await _context.Attendance
                .FirstOrDefaultAsync(a => a.AttendanceId == attendanceId && a.User.UserId == userId);

            if (attendance == null)
            {
                return false;
            }

            _context.Attendance.Remove(attendance);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}