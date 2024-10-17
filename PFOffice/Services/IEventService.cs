using StarterKit.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace StarterKit.Services
{
    public interface IEventService
    {
        Task<List<Event>> GetAllEventsAsync();
        Task<Event> AddReviewAsync(int eventId, string review);
        Task<Event> CreateEventAsync(Event newEvent);
    }
}
