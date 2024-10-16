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
        //  Create 
        public async Task<Event> CreateEventAsync(Event newEvent)
        {
            _context.Event.Add(newEvent);
            await _context.SaveChangesAsync();
            return newEvent;
        }
        

        //  Create, Update, Delete hieronder toevoegen
    }
}
