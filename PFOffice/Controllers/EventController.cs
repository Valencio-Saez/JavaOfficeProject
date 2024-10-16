using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;
using System.Threading.Tasks;

namespace StarterKit.Controllers
{
    [Route("api/v1/Event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventService.GetAllEventsAsync();
            return Ok(events);
        }

        [HttpPost("CreateEvent")]
        public async Task<IActionResult> CreateEvent([FromBody] Eventbody eventbody)
        {
            if (eventbody == null)
            {
                return BadRequest("Invalid event request.");
            }

            var createdEvent = await _eventService.CreateEvent(eventbody);
            if (createdEvent == null)
            {
                return StatusCode(500, "A problem happened while creating the event.");
            }

            return Ok(createdEvent);
        }

        [HttpPut("UpdateEvent/{id}")]
        public async Task<IActionResult> UpdateEvent(int id, [FromBody] Event eventModel)
        {
            if (eventModel == null || id != eventModel.EventId)
            {
                return BadRequest("Event ID mismatch.");
            }

            var updatedEvent = await _eventService.UpdateEvent(id, eventModel);
            if (updatedEvent == null)
            {
                return NotFound("Event not found.");
            }

            return Ok(updatedEvent);
        }

        [HttpDelete("DeleteEvent/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var deleted = await _eventService.DeleteEvent(id);
            if (!deleted)
            {
                return NotFound("Event not found.");
            }

            return Ok("Event deleted successfully.");
        }
    }

}

public class Eventbody
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public DateOnly EventDate { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public required string Location { get; set; }
}