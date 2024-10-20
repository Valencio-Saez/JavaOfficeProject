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

            var eventAttendance = new Event_Attendance
            {
                user = user,
                Event = eventEntity,
                Rating = 0, 
                Feedback = "", 
            };

            _context.Event_Attendance.Add(eventAttendance);
    
            await _context.SaveChangesAsync();
            return (true, "Attendance added successfully.");
        }

        public async Task<(bool Success, string Message)> UpdateAttendanceAsync(int userId, int eventAttendanceId, DateTime newDate)
        {
            var eventAttendance = await _context.Event_Attendance
                .Include(ea => ea.Event)  
                .FirstOrDefaultAsync(ea => ea.Event_AttendanceId == eventAttendanceId && ea.UserId == userId);

            if (eventAttendance == null)
            {
                return (false, "Event attendance not found or user not authorized.");
            }

            eventAttendance.Event.EventDate = DateOnly.FromDateTime(newDate);

            await _context.SaveChangesAsync();
            return (true, "Attendance updated successfully.");
        }

        public async Task<bool> DeleteAttendanceAsync(int userId, int eventAttendanceId)
        {
            var eventAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.Event_AttendanceId == eventAttendanceId && ea.UserId == userId);

            if (eventAttendance == null)
            {
                return false;
            }

            _context.Event_Attendance.Remove(eventAttendance);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}