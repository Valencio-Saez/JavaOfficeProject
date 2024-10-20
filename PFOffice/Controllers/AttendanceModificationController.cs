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

        // Controleer of de gebruiker is ingelogd via de sessie-ID
        private bool IsUserLoggedIn(string sessionId)
        {
            // Controleer of de sessie-ID overeenkomt met de sessie en of er een gebruiker is ingelogd
            return HttpContext.Session.Id == sessionId && HttpContext.Session.GetString("userLoggedIn") != null;
        }

        // Haal de ingelogde gebruiker op uit de sessie
        private string? GetLoggedInUserId()
        {
            return HttpContext.Session.GetString("userLoggedIn");
        }

        // POST: api/v1/AttendanceModification/AddAttendance
        [HttpPost("AddAttendance")]
        public async Task<IActionResult> AddAttendance(int eventId, [FromQuery] string sessionId)
        {
            // Controleer of de gebruiker ingelogd is via de sessie-ID
            if (!IsUserLoggedIn(sessionId))
            {
                return Unauthorized("User not logged in.");
            }

            var userId = GetLoggedInUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("User not logged in.");
            }

            var result = await _attendanceService.AddAttendanceAsync(int.Parse(userId), eventId);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        // PUT: api/v1/AttendanceModification/UpdateAttendance
        [HttpPut("UpdateAttendance")]
        public async Task<IActionResult> UpdateAttendance(int attendanceId, DateTime newDate, [FromQuery] string sessionId)
        {
            // Controleer of de gebruiker ingelogd is via de sessie-ID
            if (!IsUserLoggedIn(sessionId))
            {
                return Unauthorized("User not logged in.");
            }

            var userId = GetLoggedInUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("User not logged in.");
            }

            var result = await _attendanceService.UpdateAttendanceAsync(int.Parse(userId), attendanceId, newDate);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        // DELETE: api/v1/AttendanceModification/DeleteAttendance/{attendanceId}
        [HttpDelete("DeleteAttendance/{attendanceId}")]
        public async Task<IActionResult> DeleteAttendance(int attendanceId, [FromQuery] string sessionId)
        {
            // Controleer of de gebruiker ingelogd is via de sessie-ID
            if (!IsUserLoggedIn(sessionId))
            {
                return Unauthorized("User not logged in.");
            }

            var userId = GetLoggedInUserId();
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("User not logged in.");
            }

            var result = await _attendanceService.DeleteAttendanceAsync(int.Parse(userId), attendanceId);

            if (!result)
            {
                return NotFound("Attendance not found or user not authorized.");
            }

            return Ok("Attendance deleted successfully.");
        }
    }
}


// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using StarterKit.Models;
// using StarterKit.Services;
// using System.Security.Claims;
// using System.Threading.Tasks;

// namespace StarterKit.Controllers
// {
//     [Route("api/v1/[controller]")]
//     [ApiController]
//     public class AttendanceModificationController : ControllerBase
//     {
//         private readonly IAttendanceService _attendanceService;

//         public AttendanceModificationController(IAttendanceService attendanceService)
//         {
//             _attendanceService = attendanceService;
//         }

//         [HttpPost("AddAttendance")]
//         [Authorize]
//         public async Task<IActionResult> AddAttendance(int eventId)
//         {
//             var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

//             if (string.IsNullOrEmpty(userId))
//             {
//                 return Unauthorized("User not logged in.");
//             }

//             var result = await _attendanceService.AddAttendanceAsync(int.Parse(userId), eventId);

//             if (!result.Success)
//             {
//                 return BadRequest(result.Message);
//             }

//             return Ok(result.Message);
//         }

//         [HttpPut("UpdateAttendance")]
//         [Authorize] 
//         public async Task<IActionResult> UpdateAttendance(int attendanceId, DateTime newDate)
//         {
//             var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

//             if (string.IsNullOrEmpty(userId))
//             {
//                 return Unauthorized("User not logged in.");
//             }

//             var result = await _attendanceService.UpdateAttendanceAsync(int.Parse(userId), attendanceId, newDate);

//             if (!result.Success)
//             {
//                 return BadRequest(result.Message);
//             }

//             return Ok(result.Message);
//         }

//         [HttpDelete("DeleteAttendance/{attendanceId}")]
//         [Authorize]
//         public async Task<IActionResult> DeleteAttendance(int attendanceId)
//         {
//             var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

//             if (string.IsNullOrEmpty(userId))
//             {
//                 return Unauthorized("User not logged in.");
//             }

//             var result = await _attendanceService.DeleteAttendanceAsync(int.Parse(userId), attendanceId);

//             if (!result)
//             {
//                 return NotFound("Attendance not found or user not authorized.");
//             }

//             return Ok("Attendance deleted successfully.");
//         }
//     }
// }
