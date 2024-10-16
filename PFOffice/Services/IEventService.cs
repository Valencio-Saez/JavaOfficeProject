using StarterKit.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace StarterKit.Services
{
    public interface IEventService
    {
        Task<List<Event>> GetAllEventsAsync();
        Task<Event> CreateEventAsync(Event newEvent);
    }
}
