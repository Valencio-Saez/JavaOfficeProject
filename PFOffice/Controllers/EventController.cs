using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;
using System.Threading.Tasks;

namespace StarterKit.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        // Controleer of de gebruiker een ingelogde admin is
        private bool IsAdminLoggedIn()
        {
            return HttpContext.Session.GetString("adminLoggedIn") != null;
        }

        [HttpGet("GetAllEvents")]
        public async Task<IActionResult> GetAllEvents()
        {
            // if (!IsAdminLoggedIn())
            // {
            //     return Unauthorized("Access denied. Admin login required.");
            // }
            var events = await _eventService.GetAllEventsAsync();
            return Ok(events);
        }

        [HttpGet("{eventId}")]
        public async Task<IActionResult> GetEventById(int eventId)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Access denied. Admin login required.");
            }
            var eventDetails = await _eventService.GetEventByIdAsync(eventId);

            if (eventDetails == null)
            {
                return NotFound("Event not found.");
            }

            return Ok(eventDetails);
        }

        [HttpPost("{eventId}/reviews")]
        public async Task<IActionResult> PostReview(int eventId, string review)
        {

            var newReview = await _eventService.AddReviewAsync(eventId, review);
            return CreatedAtAction("PostReview", newReview);
        }

        [HttpPost("events")]
        public async Task<IActionResult> CreateEvent([FromBody] Eventbody eventBody)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Access denied. Admin login required.");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdEvent = await _eventService.CreateEventAsync(eventBody);

            return CreatedAtAction(nameof(GetAllEvents), new { id = createdEvent.EventId }, createdEvent);
        }
        [HttpPut("UpdateEvent/{id}")]
        public async Task<IActionResult> UpdateEvent(int id, [FromBody] Eventbody eventBody)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Access denied. Admin login required.");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var updatedEvent = await _eventService.UpdateEventAsync(id, eventBody);
            if (updatedEvent == null)
            {
                return NotFound("Event not found.");
            }

            return Ok(updatedEvent);
        }

        [HttpDelete("DeleteEvent/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Access denied. Admin login required.");
            }
            var deleted = await _eventService.DeleteEventAsync(id);
            if (!deleted)
            {
                return BadRequest("Event not found or could not be deleted.");
            }

            return Ok("Event deleted successfully.");
        }



        [HttpGet("{eventId}/attendees")]
        public async Task<IActionResult> GetEventAttendees(int eventId)
        {
            var eventAttendees = await _eventService.GetEventAttendeesAsync(eventId);

            if (eventAttendees == null)
            {
                return NotFound("Event not found.");
            }

            return Ok(eventAttendees.Select(ea => new
            {
                ea.user.UserId,
                ea.user.FirstName,
                ea.user.LastName,
                ea.user.Email
            }));
        }

        [HttpDelete("{eventId}/attendees/{userId}")]
        public async Task<IActionResult> SpecificEventAttendee(int eventId, int userId)
        {
            var deleted = await _eventService.DeleteAttendanceAsync(eventId, userId);
            if (!deleted)
            {
                return NotFound("Attendance not found.");
            }

            return Ok("Attendee removed successfully.");
        }
    }

}