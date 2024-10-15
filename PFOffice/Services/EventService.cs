using Microsoft.EntityFrameworkCore;
using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using StarterKit.Utils;

namespace StarterKit.Services
{
    public class EventService : IEventService
    {
        private readonly DatabaseContext _context;

        public EventService(DatabaseContext context)
        {
            _context = context;
        }

        // Method to retrieve all events, including attendees and reviews
        public async Task<List<Event>> GetAllEventsAsync()
        {
            // Fetch events and include their attendees (Event_Attendance) and their feedback
            return await _context.Event
                .Include(e => e.Event_Attendances)             // Include event attendees (Event_Attendance)
                    .ThenInclude(ea => ea.User)               // Include User for each event attendance
                .ToListAsync();
        }

        // Other methods like Create, Update, Delete can be added here
        public async Task<Event> AddReviewAsync(int eventId, string review)
        {
            var eventEntity = await _context.Event.FindAsync(eventId);
            if (!eventEntity == null)
            {
                if (eventEntity.Review != "")
                {
                    _context.Event.Review = review;
                    //await _context.SaveChangesAsync();
                    return await eventEntity;
                }
                return await eventEntity;
            }
            throw new NotFoundException("Event not found");
        }
    }
}