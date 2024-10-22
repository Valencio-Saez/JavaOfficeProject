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

        // 1.5.2 Changed: User ID retrieval and check for logged-in user
        private bool IsUserLoggedIn(out int userId)
        {
            var userIdString = HttpContext.Session.GetString("userId"); // Get userId from session
            if (int.TryParse(userIdString, out userId))
            {
                return true; // User is logged in
            }
            userId = 0; // Set default value if not logged in
            return false; // Not logged in
        }

        // POST: api/v1/AttendanceModification/AddAttendance
        [HttpPost("AddAttendance")]
        public async Task<IActionResult> AddAttendance(int eventId)
        {
            if (!IsUserLoggedIn(out var userId)) // Changed: Use IsUserLoggedIn method
            {
                return Unauthorized("Login required to add attendance.");
            }

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
            if (!IsUserLoggedIn(out var userId)) // Changed: Use IsUserLoggedIn method
            {
                return Unauthorized("Login required to update attendance.");
            }

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
            if (!IsUserLoggedIn(out var userId)) // Changed: Use IsUserLoggedIn method
            {
                return Unauthorized("Login required to delete attendance.");
            }

            var result = await _attendanceService.DeleteAttendanceAsync(userId, attendanceId);
            if (!result)
            {
                return NotFound("Attendance not found or user not authorized.");
            }

            return Ok("Attendance deleted successfully.");
        }
    }
}