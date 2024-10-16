using StarterKit.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace StarterKit.Services
{
    public interface IEventService
    {
        Task<List<Event>> GetAllEventsAsync();
        Task<Event> CreateEvent(Eventbody eventbody); 
        Task<Event> UpdateEvent(int id, Event eventModel);
        Task<bool> DeleteEvent(int id);
    }
}
