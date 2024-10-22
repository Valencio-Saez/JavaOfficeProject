using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;
using System.Threading.Tasks;

namespace StarterKit.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AttendanceModificationController : ControllerBase
    {
        private readonly IAttendanceService _attendanceService;

        public AttendanceModificationController(IAttendanceService attendanceService)
        {
            _attendanceService = attendanceService;
        }

        // Controleer of de gebruiker is ingelogd (admin of user)
        private bool IsUserOrAdminLoggedIn(out string loggedInUser)
        {
            loggedInUser = HttpContext.Session.GetString("userLoggedIn") ?? HttpContext.Session.GetString("adminLoggedIn");
            return loggedInUser != null;
        }

        // POST: api/v1/AttendanceModification/AddAttendance
        [HttpPost("AddAttendance")]
        public async Task<IActionResult> AddAttendance([FromBody] AttendenceBody attendenceBody)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to add attendance.");
            }

            var result = await _attendanceService.AddAttendanceAsync(attendenceBody);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        // PUT: api/v1/AttendanceModification/UpdateAttendance
        [HttpPut("UpdateAttendance")]
        public async Task<IActionResult> UpdateAttendance([FromBody] AttendenceBody attendenceBody)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to update attendance.");
            }

            var result = await _attendanceService.UpdateAttendanceAsync(attendenceBody);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }


        // DELETE: api/v1/AttendanceModification/DeleteAttendance/{attendanceId}
        [HttpDelete("DeleteAttendance/{attendanceId}")]
        public async Task<IActionResult> DeleteAttendance([FromRoute] int attendanceId)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to delete attendance.");
            }

            var result = await _attendanceService.DeleteAttendanceAsync(attendanceId);
            if (!result)
            {
                return NotFound("Attendance not found or user not authorized.");
            }

            return Ok("Attendance deleted successfully.");
        }

        // GET: api/v1/Attendance/EventAttendees/{eventId}
        [HttpGet("GetAttendees/{eventId}")]
        [Authorize] // Protecting this endpoint, requires authentication
        public async Task<IActionResult> GetAttendeesAsync(int eventId)
        {
            var attendees = await _attendanceService.GetAttendeesAsync(eventId);
            if (attendees == null || !attendees.Any())
            {
                return NotFound("No attendees found for this event.");
            }

            return Ok(attendees);
        }
    }

    public class AttendenceBody
    {
        public int EventId { get; set; }
        public int UserId { get; set; }
    }

}