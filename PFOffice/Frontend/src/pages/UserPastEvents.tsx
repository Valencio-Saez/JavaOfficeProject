import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Interface voor Event, aangepast indien nodig
interface Event {
  eventId: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  rating?: number; // Optioneel, als je de huidige rating wilt weergeven
}



const UserPastEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredRating, setHoveredRating] = useState<{ [key: number]: number | null }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const hardcodedEvents: Event[] = [
      {
        eventId: 1,
        title: 'React Workshop',
        description: 'Leer de basis van React!',
        location: 'Amsterdam',
        eventDate: '2025-01-10',
        startTime: '10:00',
        endTime: '16:00',
        rating: 4
      },
      {
        eventId: 2,
        title: 'TypeScript Introductie',
        description: 'Inleiding tot TypeScript voor beginners.',
        location: 'Utrecht',
        eventDate: '2025-01-15',
        startTime: '09:00',
        endTime: '12:00',
        rating: 5
      }
    ];

    setEvents(hardcodedEvents);
    setLoading(false); // Zet loading op false nadat de events zijn geladen
  }, []);

  const handleRating = async (eventId: number, rating: number) => {
    try {
      const response = await fetch(`/api/v1/Event_Attendance/RateEvent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId, rating }),
      });

      if (response.ok) {
        alert('Rating succesvol opgeslagen!');
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.eventId === eventId ? { ...event, rating } : event
          )
        );
      } else {
        alert('Fout bij het opslaan van de rating: ' + response.statusText);
      }
    } catch (error) {
      alert('Fout bij het opslaan van de rating: ' + error);
    }
  };

  const viewAttendees = (id: number) => {
    navigate(`/event/${id}/attendees`);
  };

  const handleMouseEnter = (eventId: number, rating: number) => {
    setHoveredRating((prev) => ({ ...prev, [eventId]: rating }));
  };

  const handleMouseLeave = (eventId: number) => {
    setHoveredRating((prev) => ({ ...prev, [eventId]: null }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>My Past Events</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.eventId}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{new Date(event.eventDate).toLocaleDateString()}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onMouseEnter={() => handleMouseEnter(event.eventId, star)}
                      onMouseLeave={() => handleMouseLeave(event.eventId)}
                      onClick={() => handleRating(event.eventId, star)}
                      style={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        color:
                          hoveredRating[event.eventId] && hoveredRating[event.eventId]! >= star
                            ? 'gold'
                            : star <= (hoveredRating[event.eventId] ?? event.rating ?? 0)
                            ? 'gold'
                            : '#ccc',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <button onClick={() => viewAttendees(event.eventId)}>
                  View Attendees
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPastEvents;