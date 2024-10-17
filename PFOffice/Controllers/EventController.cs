using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;


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
        [HttpGet("GetAllEvents")] 
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventService.GetAllEventsAsync();

            return Ok(events);
        }

        [HttpPost("{eventId}/reviews")]
        public async Task<IActionResult> PostReview(int eventId, string review)
        {
            var newReview = await _eventService.AddReviewAsync(eventId, review);
            return CreatedAtAction("PostReview", newReview);
        }

        [HttpPost("events")]
        [Authorize(Roles = "Admin")] 
        public async Task<IActionResult> CreateEvent([FromBody] Event newEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

           
            newEvent.AdminApproval = false; 
            var createdEvent = await _eventService.CreateEventAsync(newEvent);

            return CreatedAtAction(nameof(GetAllEvents), new { id = createdEvent.EventId }, createdEvent);
        }
        
    }
}

