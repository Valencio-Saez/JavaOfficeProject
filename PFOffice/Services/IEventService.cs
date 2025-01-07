using StarterKit.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarterKit.Services
{
    public interface IEventService
    {
        Task<List<Event>> GetAllEventsAsync();
        Task<Event> AddReviewAsync(int eventid, string review);
        Task<Event> CreateEventAsync(Eventbody eventBody);
        Task<Event> UpdateEventAsync(int id, Eventbody eventBody);
        Task<bool> DeleteEventAsync(int id);
        Task<(bool Success, string Message, Event AttendedEvent)> AddAttendanceAsync(int eventId, int userId);
        Task<List<Event_Attendance>> GetEventAttendeesAsync(int eventId);
        Task<bool> DeleteAttendanceAsync(int eventId, int userId);
    }
}
