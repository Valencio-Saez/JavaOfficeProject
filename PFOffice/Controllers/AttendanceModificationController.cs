using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Models;
using StarterKit.Services;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

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

        [HttpPost("AddAttendance")]
        public async Task<IActionResult> AddAttendance([FromBody] AttendanceRequest attendanceRequest)
        {
            var userIdString = HttpContext.Session.GetString("userId");
            if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out var userId))
            {
                return BadRequest("Invalid request data.");
            };

            var result = await _attendanceService.AddAttendanceAsync(userId, attendanceRequest.EventId);
            if (!result.Success)
            {
                return BadRequest(new { message = result.Message + " Please try again." });
            }

            return Ok(new { message = result.Message });
        }

        [HttpDelete("DeleteAttendance/{attendanceId}")]
        [Authorize]
        public async Task<IActionResult> DeleteAttendance(int attendanceId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("User not logged in.");
            }

            var result = await _attendanceService.DeleteAttendanceAsync(int.Parse(userId), attendanceId);

            if (!result)
            {
                return NotFound("Attendance not found.");
            }

            return Ok("Attendee removed successfully.");
        }
    }

}