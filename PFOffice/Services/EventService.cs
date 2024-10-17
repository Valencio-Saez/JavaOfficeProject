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
                    .ThenInclude(ea => ea.User)
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
        //  Update, Delete hieronder toevoegen
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
    }
}