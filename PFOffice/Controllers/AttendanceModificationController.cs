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

        // Controleer of de gebruiker een ingelogde admin is
        private bool IsAdminLoggedIn()
        {
            return HttpContext.Session.GetString("adminLoggedIn") != null;
        }

        // POST: api/v1/AttendanceModification/AddAttendance
        [HttpPost("AddAttendance")]
        public async Task<IActionResult> AddAttendance(int eventId)
        {
            // Controleer of de admin is ingelogd
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to add attendance.");
            }

            var result = await _attendanceService.AddAttendanceAsync(1, eventId); // 1 als placeholder voor userId, kan aangepast worden
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
            // Controleer of de admin is ingelogd
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to update attendance.");
            }

            var result = await _attendanceService.UpdateAttendanceAsync(1, attendanceId, newDate); // 1 als placeholder voor userId
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
            // Controleer of de admin is ingelogd
            if (!IsAdminLoggedIn())
            {
                return Unauthorized("Admin privileges required to delete attendance.");
            }

            var result = await _attendanceService.DeleteAttendanceAsync(1, attendanceId); // 1 als placeholder voor userId
            if (!result)
            {
                return NotFound("Attendance not found or user not authorized.");
            }

            return Ok("Attendance deleted successfully.");
        }
    }
}