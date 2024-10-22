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




        //1.5.3  check if attendance if check for existing event attendance before adding a new record
        public async Task<(bool Success, string Message)> AddAttendanceAsync(int userId, int eventId)
        {
            var user = await _context.User.FindAsync(userId);
            var eventEntity = await _context.Event.FindAsync(eventId);

            if (user == null || eventEntity == null)
            {
                return (false, "User or event not found.");
            }

            // Check for existing attendance for the user and event
            var existingAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.UserId == userId && ea.Event.EventId == eventId); // Assuming Event has an EventId property

            if (existingAttendance != null)
            {
                return (false, "You have already booked attendance for this event.");
            }

            var eventAttendance = new Event_Attendance
            {
                user = user, // Correctly using 'user' as per your model
                Event = eventEntity, // Correctly using 'Event' as per your model
                Rating = 0,
                Feedback = "",
            };

            _context.Event_Attendance.Add(eventAttendance);
            await _context.SaveChangesAsync();
            return (true, "Attendance added successfully.");
        }

        public async Task<(bool Success, string Message)> UpdateAttendanceAsync(int userId, int eventAttendanceId, DateTime newDate)
        {
            // Changed: Ensure only the correct user's attendance is updated
            var eventAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.Event_AttendanceId == eventAttendanceId && ea.UserId == userId);

            if (eventAttendance == null)
            {
                return (false, "Event attendance not found or user not authorized.");
            }

            // Update any necessary fields here
            eventAttendance.Event.EventDate = DateOnly.FromDateTime(newDate);

            await _context.SaveChangesAsync();
            return (true, "Attendance updated successfully.");
        }

        public async Task<bool> DeleteAttendanceAsync(int userId, int eventAttendanceId)
        {
            // Changed: Ensure only the correct user's attendance is deleted
            var eventAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.Event_AttendanceId == eventAttendanceId && ea.UserId == userId);

            if (eventAttendance == null)
            {
                return false; // User not authorized or attendance not found
            }

            _context.Event_Attendance.Remove(eventAttendance);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}