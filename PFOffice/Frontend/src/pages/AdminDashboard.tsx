import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
}

interface Eventbody {
  title: string;
  description: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
}

const AdminDashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Eventbody>({
    title: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    location: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/v1/Event/GetAllEvents');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/Event/events', newEvent);
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-event/${id}`);
  };

  const handleAddEvent = () => {
    navigate(`/add-event`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/api/v1/Event/DeleteEvent/${id}`);
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const viewAttendees = (id: number) => {
    navigate(`/event/${id}/attendees`);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>All Events</h2>
    <div className="text-left">
      <button className="btn btn-primary" onClick={handleAddEvent}>Go to add event</button>
    </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{event.eventDate}</td>
              <td>
                <button onClick={() => handleEdit(event.id)}>Edit</button>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
                <button onClick={() => viewAttendees(event.id)}>View Attendees</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AdminDashboard;