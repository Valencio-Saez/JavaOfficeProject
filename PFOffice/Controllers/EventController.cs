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
        [Authorize (Roles = "Admin") ]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventService.GetAllEventsAsync();
            return Ok(events);
        }

        [HttpPost("{eventId}/reviews")]
        public async Task<IActionResult> PostReview([FromBody] ReviewBody reviewbody)
        {
            var newReview = await _eventService.AddReviewAsync(reviewbody);
            return CreatedAtAction("PostReview", newReview);
        }

        [HttpPost("events")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateEvent([FromBody] Eventbody eventBody)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to create an event.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdEvent = await _eventService.CreateEventAsync(eventBody);
            return CreatedAtAction(nameof(GetAllEvents), new { id = createdEvent.EventId }, createdEvent);
        }

        // [HttpPut("UpdateEvent/{id}")]
        // [Authorize(Roles = "Admin")]
        // public async Task<IActionResult> UpdateEvent(int id, [FromBody] Eventbody eventBody)
        // {
        //     if (!ModelState.IsValid)
        //     {
        //         return BadRequest(ModelState);
        //     }

        //     var updatedEvent = await _eventService.UpdateEventAsync(id, eventBody);
        //     if (updatedEvent == null)
        //     {
        //         return NotFound("Event not found.");
        //     }

        //     return Ok(updatedEvent);
        // }
        [HttpPut("UpdateEvent/{id}")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateEvent(int id, [FromBody] Eventbody eventBody)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to update an event.");
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

        // [HttpDelete("DeleteEvent/{id}")]
        // [Authorize(Roles = "Admin")]
        // public async Task<IActionResult> DeleteEvent(int id)
        // {
        //     var deleted = await _eventService.DeleteEventAsync(id);
        //     if (!deleted)
        //     {
        //         return NotFound("Event not found.");
        //     }

        //     return Ok("Event deleted successfully.");
        // }

        // DELETE: api/v1/Event/DeleteEvent/{id} (alleen toegankelijk voor ingelogde admins)
        [HttpDelete("DeleteEvent/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to delete an event.");
            }

            var deleted = await _eventService.DeleteEventAsync(id);
            if (!deleted)
            {
                return BadRequest("Event not found or could not be deleted.");
            }

            return Ok("Event deleted successfully.");
        }



        [HttpGet("{eventId}/attendees")]
        [Authorize (Roles = "Admin")] 
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

        [HttpDelete("{eventId}/attendees/{userId}")]
        [Authorize (Roles = "Admin")]
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

