import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    location: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/v1/Event/GetAllEvents');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error('Error fetching events:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/Event/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });

      if (response.ok) {
        fetchEvents();
      } else {
        console.error('Error adding event:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} placeholder="Title" />
        <textarea name="description" value={newEvent.description} onChange={handleInputChange} placeholder="Description" />
        <input type="date" name="eventDate" value={newEvent.eventDate} onChange={handleInputChange} />
        <input type="time" name="startTime" value={newEvent.startTime} onChange={handleInputChange} />
        <input type="time" name="endTime" value={newEvent.endTime} onChange={handleInputChange} />
        <input type="text" name="location" value={newEvent.location} onChange={handleInputChange} placeholder="Location" />
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map((event: any) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;