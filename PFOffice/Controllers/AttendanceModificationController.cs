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
        public async Task<IActionResult> AddAttendance(int eventId)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to add attendance.");
            }

            // Gebruik admin of user voor verdere functionaliteit
            var userId = 1; // Dummy userId. In een echte applicatie zou je dit ophalen van de ingelogde gebruiker.

            var result = await _attendanceService.AddAttendanceAsync(userId, eventId);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        // PUT: api/v1/AttendanceModification/UpdateAttendance
        [HttpPut("UpdateAttendance")]
        public async Task<IActionResult> UpdateAttendance(int attendanceId, DateTime newDate)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to update attendance.");
            }

            var userId = 1; // Dummy userId. In een echte applicatie zou je dit ophalen van de ingelogde gebruiker.

            var result = await _attendanceService.UpdateAttendanceAsync(userId, attendanceId, newDate);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        // DELETE: api/v1/AttendanceModification/DeleteAttendance/{attendanceId}
        [HttpDelete("DeleteAttendance/{attendanceId}")]
        public async Task<IActionResult> DeleteAttendance(int attendanceId)
        {
            if (!IsUserOrAdminLoggedIn(out var loggedInUser))
            {
                return Unauthorized("Login required to delete attendance.");
            }

            var userId = 1; // Dummy userId. In een echte applicatie zou je dit ophalen van de ingelogde gebruiker.

            var result = await _attendanceService.DeleteAttendanceAsync(userId, attendanceId);
            if (!result)
            {
                return NotFound("Attendance not found or user not authorized.");
            }

            return Ok("Attendance deleted successfully.");
        }
    }
}