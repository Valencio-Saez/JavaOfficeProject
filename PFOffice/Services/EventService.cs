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

        // Read
        public async Task<List<Event>> GetAllEventsAsync()
        {
            
            return await _context.Event
                .Include(e => e.Event_Attendances)             
                    .ThenInclude(ea => ea.User)               
                .ToListAsync();
        }
        //  Create 
        public async Task<Event> CreateEventAsync(Event newEvent)
        {
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
    }
}
