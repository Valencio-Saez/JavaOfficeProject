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

        private bool IsUserLoggedin()
        {
            return HttpContext.Session.GetString("userLoggedIn") != null;
        }

        [HttpGet("GetAllEvents")]
        // [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllEvents()
        {
            // if (!IsUserLoggedin())
            // {
            //     return Unauthorized("Admin privileges required to create an event.");
            // }
            var userIdString = HttpContext.Session.GetString("userId");
            int? userId = null;
            if (!string.IsNullOrEmpty(userIdString) && int.TryParse(userIdString, out var parsedUserId))
            {
                userId = parsedUserId;
            }
            var events = await _eventService.GetAllEventsAsync();
            return Ok(events);
        }

        [HttpGet("GetUserEvents")]
        public async Task<IActionResult> GetUserEvents()
        {
            var userIdString = HttpContext.Session.GetString("userId");
            if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            {
                return Unauthorized(new { message = "User not logged in" });
            }

            var events = await _eventService.GetUserEventsAsync(userId);
            return Ok(events);
        }

        [HttpGet("{eventId}")]
        public async Task<IActionResult> GetEventById(int eventId)
        {
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
        // [Authorize(Roles = "adminLoggedIn")]
        public async Task<IActionResult> CreateEvent([FromBody] Eventbody eventBody)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdEvent = await _eventService.CreateEventAsync(eventBody);

            return CreatedAtAction(nameof(GetAllEvents), new { id = createdEvent.EventId }, createdEvent);
        }

        [HttpPut("UpdateEvent/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateEvent(int id, [FromBody] Eventbody eventBody)
        {
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
            var deleted = await _eventService.DeleteEventAsync(id);
            if (!deleted)
            {
                return BadRequest("Event not found or could not be deleted.");
            }

            return Ok("Event deleted successfully.");
        }



        [HttpGet("{eventId}/attendees")]
        [Authorize(Roles = "Admin")]
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

        // [HttpDelete("{eventId}/attendees/{userId}")]
        // [Authorize]
        // public async Task<IActionResult> DeleteEventAttendee(int eventId)
        // {
        //     var deleted = await _eventService.DeleteEventAsync(eventId);
        //     if (!deleted)
        //     {
        //         return NotFound("Event or attendee not found.");
        //     }

        //     return Ok("Attendee removed successfully.");
        // }

        [HttpDelete("{eventId}/specifieke")]
        public async Task<IActionResult> SpecificEventAttendee(int eventId)
        {
            var userIdString = HttpContext.Session.GetString("userId");
            if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            {
                return Unauthorized(new { message = "User not logged in" });
            }

            var deleted = await _eventService.SpecificEventAttendee(eventId, userId);
            if (!deleted)
            {
                return NotFound("Attendance not found.");
            }

            return Ok("Attendee removed successfully.");
        }

        [HttpGet("{eventId}/isUserAttending")]
        public async Task<IActionResult> IsUserAttending(int eventId)
        {
            var userIdString = HttpContext.Session.GetString("userId");
            if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            {
                return Unauthorized(new { message = "User not logged in" });
            }

            var isAttending = await _eventService.IsUserAttendingAsync(eventId, userId);
            var message = isAttending ? "User is attending the event." : "User is not attending the event.";
            return Ok(new { isAttending, message });
        }
        
    }

}
