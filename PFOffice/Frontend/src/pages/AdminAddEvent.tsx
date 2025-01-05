import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAddEvent = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');    

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          await axios.post('/api/v1/Event/events', {
            title,
            description,
            eventDate,
            startTime,
            endTime,
            location
          });
          navigate('/admin');
        } catch (error) {
          console.error('Error adding event:', error);
        }
      };
    
    //   ### Event POST test - POST /events – Create New Event 
    //   POST http://localhost:5097/api/v1/Event/events
    //   content-Type: application/json
      
    //   {
    //       "Title": "New Event",
    //       "Description": "This is a new event created for testing purposes.",
    //       "EventDate": "2025-01-05",
    //       "StartTime": "10:00:00",
    //       "EndTime": "12:00:00",
    //       "Location": "Online"
    //   }
      return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="bold-label">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="bold-label">Description:</label>
                    <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDate" className="bold-label">Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                </div>
                <div className="form-group">    
                    <label htmlFor="startTime" className="bold-label">Start Time:</label>
                    <input type="time" id="startTime" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime" className="bold-label">End Time:</label>
                    <input type="time" id="endTime" name="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="bold-label">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button className="btn btn-primary">Add Event</button>
                <button className="btn btn-secondary" onClick={() => navigate('/admin')}>Back</button>
            </form>
        </div>
    );
};

export default AdminAddEvent;