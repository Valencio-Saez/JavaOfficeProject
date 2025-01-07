import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Event {
  eventId: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents(); // Fetch events directly for testing purposes
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/v1/Event/GetAllEvents', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();

      if (data && data.$values && Array.isArray(data.$values)) {
        // Filter events to only include those in the future
        const now = new Date();
        const futureEvents = data.$values.filter((event: Event) => {
          const eventDateTime = new Date(`${event.eventDate}T${event.startTime}`);
          return eventDateTime > now;
        });
        setEvents(futureEvents);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEventClick = (id: number) => {
    navigate(`/events/${id}`); // Navigate to event details page
  };

  return (
    <div>
      <h1>Events</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Event Date</th>
            <th>Start Time</th>
            <th>End Time</th>
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
                <button onClick={() => handleEventClick(event.eventId)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;