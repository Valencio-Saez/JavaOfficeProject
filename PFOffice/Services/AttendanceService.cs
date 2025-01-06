using System.Threading.Tasks;
using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StarterKit.Controllers;

namespace StarterKit.Services
{
    public class AttendanceService : IAttendanceService
    {
        private readonly DatabaseContext _context;


        public AttendanceService(DatabaseContext context)
        {
            _context = context;
        }


        public async Task<(bool Success, string Message)> AddAttendanceAsync(AttendenceBody attendenceBody)
        {
            // Check if event exists
            var eventEntity = await _context.Event.FindAsync(attendenceBody.EventId);
            if (eventEntity == null)
            {
                return (false, "Event not found.");
            }

           var attendance = new Event_Attendance() // Create a new Attendance
            {
                Event_AttendanceId = 0,
                Rating = 0,
                Feedback = "",
                Event = eventEntity,
                user = user,
                
            };

            _context.Event_Attendance.Add(attendance);

            // Check if user already attended the event
            var existingAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.EventId == attendenceBody.EventId && ea.UserId == attendenceBody.UserId);

            if (existingAttendance != null)
            {
                return (false, "Attendance already exists for this event.");
            }

            // If all checks pass, add attendance
            var eventAttendance = new Event_Attendance
            {
                UserId = attendenceBody.UserId,
                EventId = attendenceBody.EventId,
                Rating = 0, // Default rating
                Feedback = "", // Default feedback
                user = await _context.User.FindAsync(attendenceBody.UserId), // Fetch user
                Event = eventEntity // Set the event directly
            };

            await _context.Event_Attendance.AddAsync(eventAttendance);
            await _context.SaveChangesAsync();

            // Return success with event details
            return (true, "Attendance added successfully.");
        }



        public async Task<List<AttendeeDto>> GetAttendeesAsync(int eventId)
        {
            var eventEntity = await _context.Event
                .Include(e => e.Event_Attendances) // Include Event_Attendances
                .FirstOrDefaultAsync(e => e.EventId == eventId);

            if (eventEntity == null)
            {
                return null; // Event not found
            }

            var attendees = eventEntity.Event_Attendances
                .Select(ea => new AttendeeDto
                {
                    UserId = ea.UserId,
                    EventAttendanceId = ea.Event_AttendanceId,
                    Feedback = ea.Feedback,
                    Rating = ea.Rating
                })
                .ToList();

            return attendees;
        }

        public async Task<(bool Success, string Message)> UpdateAttendanceAsync(AttendenceBody attendenceBody)
        {
            var eventEntity = await _context.Event.FindAsync(attendenceBody.EventId);

            if (eventEntity == null)
            {
                return (false, "Event not found.");
            }

            eventEntity.EventDate = DateOnly.FromDateTime(attendenceBody.AttendanceDate);

            try
            {
                await _context.SaveChangesAsync();
                return (true, "Event date updated successfully.");
            }
            catch (DbUpdateException ex)
            {
                return (false, "An error occurred while updating the event date: " + ex.Message);
            }
        }


        // public async Task<(bool Success, string Message)> UpdateAttendanceAsync(AttendenceBody attendenceBody)
        // {
        //     // Zoek naar de juiste Attendance
        //     var attendance = await _context.Attendance
        //         .Include(a => a.User)
        //         .FirstOrDefaultAsync(a => a.User.UserId == attendenceBody.UserId && a.User.Event_Attendances.Any(ea => ea.EventId == attendenceBody.EventId));

        //     if (attendance == null)
        //     {
        //         return (false, "Attendance not found or user not authorized.");
        //     }

        //     // Update de datum
        //     attendance.AttendanceDate = attendenceBody.AttendanceDate;

        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //         return (true, "Attendance date updated successfully.");
        //     }
        //     catch (DbUpdateException ex)
        //     {
        //         return (false, "An error occurred while updating the attendance: " + ex.Message);
        //     }
        // }
        
        public async Task<bool> DeleteAttendanceAsync(int eventAttendanceId)
        {
            var eventAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.Event_AttendanceId == eventAttendanceId);

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