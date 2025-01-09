using System.Text.Json.Serialization;

namespace StarterKit.Models
{
    public class User
    {
        public int UserId { get; set; }
        public required string UserName { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string RecuringDays { get; set; }

        //[JsonIgnore]
        public required List<Attendance> Attendances { get; set; }

        //[JsonIgnore]
        public required List<Event_Attendance> Event_Attendances { get; set; }
    }

    public class Attendance
    {
        public int AttendanceId { get; set; }
        public DateTime AttendanceDate { get; set; }

        //[JsonIgnore]
        public required User User { get; set; }
    }

    public class Event_Attendance
    {
        public int Event_AttendanceId { get; set; }
        public int Rating { get; set; }
        public required string Feedback { get; set; }

        //[JsonIgnore]
        public required User user { get; set; }

        //[JsonIgnore]
        public required Event Event { get; set; }
    }

    public class Event
    {
        public int EventId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public DateOnly EventDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public required string Location { get; set; }
        public bool AdminApproval { get; set; }

        // [JsonIgnore]
        public required List<Event_Attendance> Event_Attendances { get; set; }
        public string? Review { get; set; }

        public List<int> Ratings { get; set; } = new(); // Nieuw: lijst met ratings
        public double AverageRating => Ratings.Count > 0 ? Ratings.Average() : 0.0;

    }

    public class AttendanceRequest
    {
        public int EventId { get; set; }
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
}