using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarterKit.Services
{
    public interface IEventService
    {
        Task<List<Event>> GetAllEventsAsync();
        Task<Event> CreateEventAsync(Eventbody eventBody);
        Task<Event> UpdateEventAsync(int id, Eventbody eventBody);
        Task<bool> DeleteEventAsync(int id);
    }
}