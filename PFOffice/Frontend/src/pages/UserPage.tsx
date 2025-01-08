import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Event {
  eventId: number;
  title: string;
  eventDate: string;
  startTime: string;
  endTime: string;
}

const UserPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
    fetchUserEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/v1/Event/GetAllEvents', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      console.log('API response:', data); // Debugging

      if (data && data.$values && Array.isArray(data.$values)) {
        const now = new Date();
        const futureEvents = data.$values.filter((event: Event) => {
          const eventDateTime = new Date(`${event.eventDate}T${event.startTime}`);
          return eventDateTime > now;
        });
        console.log('Filtered events:', futureEvents); // Debugging
        setEvents(futureEvents);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchUserEvents = async () => {
    try {
      const response = await fetch('/api/v1/Event/GetUserEvents', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      console.log('User events response:', data); // Debugging

      if (data && data.$values && Array.isArray(data.$values)) {
        setUserEvents(data.$values);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching user events:', error);
    }
  };

  const handleEventClick = (id: number) => {
    console.log(`Navigating to event details for event ID: ${id}`); // Debugging
    navigate(`/events/${id}`);
  };

  const handleLogout = () => {
    console.log('Logging out'); // Debugging
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleLogout}>Log Out</button>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2>All Events</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
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
        <div style={{ flex: 1 }}>
          <h2>My Events</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Event Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userEvents.map((event) => (
                <tr key={event.eventId}>
                  <td>{event.title}</td>
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
      </div>
    </div>
  );
};

export default UserPage;