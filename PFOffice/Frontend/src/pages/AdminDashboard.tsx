import React, { useState, useEffect } from 'react';
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

const AdminDashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/v1/Event/GetAllEvents');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data && data.$values && Array.isArray(data.$values)) {
          setEvents(data.$values);
        } else {
          console.error('Error: API response is not in the expected format');
        }
      } else {
        console.error('Error fetching events:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-event/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`/api/v1/Event/DeleteEvent/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          fetchEvents();
          alert('Event deleted successfully!');
        } else {
          const errorText = await response.text();
          alert('Error deleting event: ' + response.statusText + ' ' + response.status + ' ' + errorText);
        }
      } catch (error) {
        alert('Error deleting event: ' + error);
      }
    }
  };

  const viewAttendees = (id: number) => {
    navigate(`/event/${id}/attendees`);
  };

  return (
    <div>
      <h1>Admin Dashboard 2</h1>
      <h2>All Events</h2>

      <div className="text-right">
        <button className="btn btn-primary" onClick={() => navigate('/add-event')}>Add new event 2</button>
      </div>

      <div className="text-right">
        <button className="btn btn-primary" onClick={() => navigate('/layout')}>Change Layout</button>
      </div>


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
          {events.map(event => (
            <tr key={event.eventId}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{new Date(event.eventDate).toLocaleDateString()}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>
                <button onClick={() => handleEdit(event.eventId)}>Edit</button>
                <button onClick={() => handleDelete(event.eventId)}>Delete</button>
                <button onClick={() => viewAttendees(event.eventId)}>View Attendees</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;