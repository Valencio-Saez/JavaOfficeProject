using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace StarterKit.Services
{
    public class EventService : IEventService
    {
        private readonly DatabaseContext _context;

        public EventService(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Event>> GetAllEventsAsync()
        {
            return await _context.Event
                .Include(e => e.Event_Attendances)
                    .ThenInclude(ea => ea.user)
                .ToListAsync();
        }

        public async Task<Event> CreateEventAsync(Eventbody eventBody)
        {

            var newEvent = new Event
            {
                Title = eventBody.Title,
                Description = eventBody.Description,
                EventDate = eventBody.EventDate,
                StartTime = eventBody.StartTime,
                EndTime = eventBody.EndTime,
                Location = eventBody.Location,
                AdminApproval = false,
                Event_Attendances = new List<Event_Attendance>()
            };

            _context.Event.Add(newEvent);
            await _context.SaveChangesAsync();
            return newEvent;
        }

        // Other methods like Create, Update, Delete can be added here
        public async Task<Event> AddReviewAsync(int eventId, string review)
        {
            var eventEntity = await _context.Event.FindAsync(eventId);
            if (eventEntity != null)
            {
                if (eventEntity.Review != "")
                {
                    eventEntity.Review = review;
                    //await _context.SaveChangesAsync();
                    return eventEntity;
                }
                return eventEntity;
            }
            throw new System.Exception("Event not found");
        }

        public async Task<Event> UpdateEventAsync(int id, Eventbody eventBody)
        {
            var existingEvent = await _context.Event.FindAsync(id);

            if (existingEvent == null)
            {
                return null;
            }

            existingEvent.Title = eventBody.Title;
            existingEvent.Description = eventBody.Description;
            existingEvent.EventDate = eventBody.EventDate;
            existingEvent.StartTime = eventBody.StartTime;
            existingEvent.EndTime = eventBody.EndTime;
            existingEvent.Location = eventBody.Location;

            _context.Event.Update(existingEvent);
            await _context.SaveChangesAsync();
            return existingEvent;
        }

        public async Task<bool> DeleteEventAsync(int id)
        {
            var eventToDelete = await _context.Event.FindAsync(id);

            if (eventToDelete == null)
            {
                return false;
            }

            _context.Event.Remove(eventToDelete);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<(bool Success, string Message, Event AttendedEvent)> AddAttendanceAsync(int eventId, int userId)
        {
            // Retrieve the event by eventId
            var eventToUpdate = await _context.Event
                .Include(e => e.Event_Attendances)
                .FirstOrDefaultAsync(e => e.EventId == eventId);

            // Check if the event exists
            if (eventToUpdate == null)
            {
                return (false, "Event not found", null);
            }

            // Convert StartTime and EndTime (TimeSpan) to TimeOnly for comparison
            var eventStartDateTime = eventToUpdate.EventDate.ToDateTime(TimeOnly.FromTimeSpan(eventToUpdate.StartTime));

            // Check if the event is in the past or already started
            var currentDateTime = DateTime.Now;
            if (currentDateTime > eventStartDateTime)
            {
                return (false, "Event is not available (either it has passed or already started)", null);
            }

            // Check if the user is already attending the event
            if (eventToUpdate.Event_Attendances.Any(ea => ea.user.UserId == userId))
            {
                return (false, "User is already attending the event", null);
            }

            // Add the user to the event's attendance list
            var user = await _context.User.FindAsync(userId);
            if (user == null)
            {
                return (false, "User not found", null);
            }

            eventToUpdate.Event_Attendances.Add(new Event_Attendance
            {
                user = user,
                Event = eventToUpdate,
                Feedback = "",  // Add any default value if needed
                Rating = 0
            });

            // Save changes to the database
            if (await _context.SaveChangesAsync() > 0)
            {
                return (true, "Attendance added successfully", eventToUpdate);
            }

            return (false, "Failed to add attendance", null);
        }


        public async Task<bool> AddReviewToEventAsync(int eventId, string review)
        {
            // Retrieve the event by eventId
            var eventToUpdate = await _context.Event.FindAsync(eventId);

            // Check if the event exists
            if (eventToUpdate == null)
            {
                return false;
            }

            // Update the review property
            eventToUpdate.Review = review;

            // Save changes to the database
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<List<Event_Attendance>> GetEventAttendeesAsync(int eventId)
        {
            // Retrieve the event by its ID and include attendees
            var eventEntity = await _context.Event
                .Include(e => e.Event_Attendances)
                .ThenInclude(ea => ea.user)
                .FirstOrDefaultAsync(e => e.EventId == eventId);

            if (eventEntity == null)
            {
                return null; // Event not found
            }

            // Return the list of attendees for this event
            return eventEntity.Event_Attendances;
        }
        public async Task<bool> DeleteAttendanceAsync(int eventId, int userId)
        {
            var eventAttendance = await _context.Event_Attendance
                .FirstOrDefaultAsync(ea => ea.Event.EventId == eventId && ea.user.UserId == userId);

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