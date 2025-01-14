import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../wwwroot/css/site.css';
import AccessibilityOptions from './AccessibilityOptions';

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
  const [error, setError] = useState<string | null>(null);
  const [alertShown, setAlertShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminLoggedIn();
    fetchEvents();
  }, []);

  const checkAdminLoggedIn = async () => {
    try {
      const response = await fetch('/api/v1/Login/IsAdminLoggedIn');
      if (response.ok) {
        const data = await response.json();
        if (!data && !alertShown) {
          setAlertShown(true);
          navigate('/login?error=Admin%20login%20required');
        }
      } else {
        if (!alertShown) {
          setAlertShown(true);
          navigate('/login?error=Admin%20login%20required');
        }
      }
    } catch (error) {
      console.error('Error checking admin login status:', error);
      if (!alertShown) {
        setAlertShown(true);
        navigate('/login?error=Admin%20login%20required');
      }
    }
  };


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
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: 'blue' }}>{error}</p>}
      <h2>All Events</h2>
      <div className="text-right">
        <button className="btn btn-primary" onClick={() => navigate('/add-event')}>Add new event</button>
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
      <div>
        <button type="button" onClick={() => navigate('/')}>Logout</button>
      </div>
      <AccessibilityOptions />
    </div>
  );
};

export default AdminDashboard;