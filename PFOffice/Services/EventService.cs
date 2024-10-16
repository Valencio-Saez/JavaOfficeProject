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

        public async Task<List<Event>> GetAllEventsAsync()
        {
            
            return await _context.Event
                .Include(e => e.Event_Attendances)             
                    .ThenInclude(ea => ea.User)               
                .ToListAsync();
        }

        //  Create, Update, Delete hieronder toevoegen
    }
}
