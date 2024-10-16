using Microsoft.EntityFrameworkCore;
using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        public async Task<Event> CreateEvent(Eventbody eventbody)
        {
            var newEvent = new Event
            {
                Title = eventbody.Title,
                Description = eventbody.Description,
                EventDate = eventbody.EventDate,
                StartTime = eventbody.StartTime,
                EndTime = eventbody.EndTime,
                Location = eventbody.Location,
                AdminApproval = false,
                Event_Attendances = new List<Event_Attendance>()  
            };

            await _context.Event.AddAsync(newEvent);
            await _context.SaveChangesAsync();
            return newEvent;
        }

        public async Task<Event> UpdateEvent(int id, Event eventModel)
        {
            var existingEvent = await _context.Event.FindAsync(id);

            if (existingEvent == null)
            {
                return null;
            }

            existingEvent.Title = eventModel.Title;
            existingEvent.Description = eventModel.Description;
            existingEvent.EventDate = eventModel.EventDate;
            existingEvent.StartTime = eventModel.StartTime;
            existingEvent.EndTime = eventModel.EndTime;
            existingEvent.Location = eventModel.Location;

            _context.Event.Update(existingEvent);
            await _context.SaveChangesAsync();
            return existingEvent;
        }

        public async Task<bool> DeleteEvent(int id)
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