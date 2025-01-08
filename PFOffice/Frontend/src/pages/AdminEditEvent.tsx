import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';
import { useEvent } from '.././EventContext';


const AdminEditEvent = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const { event, setEvent } = useEvent();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [alertShown, setAlertShown] = useState(false);
  const [originalEvent, setOriginalEvent] = useState({
    eventId: 0,
    title: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    location: ''
  });

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
  
  useEffect(() => {
    if (eventId && event.eventId !== Number(eventId)) {
      checkAdminLoggedIn();
      fetchEvent();
    }

    return () => {
      setEvent({
        eventId: 0,
        title: '',
        description: '',
        location: '',
        eventDate: '',
        startTime: '',
        endTime: ''
      });
    };
  }, [eventId]);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`/api/v1/Event/GetEvent/${eventId}`);
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json();
          setEvent(data);
          setOriginalEvent(data);
        } else {
          const text = await response.text();
          console.error('Error fetching event:', text);
        }
      } else {
        console.error('Error fetching event:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/v1/Event/UpdateEvent/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });

      if (response.ok) {
        alert('Event updated successfully!');
        navigate('/admin');
      } else {
        const errorText = await response.text();
        alert('Error updating event: ' + response.statusText + ' ' + response.status + ' ' + errorText);
      }
    } catch (error) {
      alert('Error updating event: ' + error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="bold-label">Title:</label>
          <span className="light-grey-text">{originalEvent.title}</span>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="bold-label">Description:</label>
          <span className="light-grey-text">{originalEvent.description}</span>
          <input
            type="text"
            id="description"
            name="description"
            value={event.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate" className="bold-label">Event Date:</label>
          <span className="light-grey-text">{originalEvent.eventDate}</span>
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            value={event.eventDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime" className="bold-label">Start Time:</label>
          <span className="light-grey-text">{originalEvent.startTime}</span>
          <input
            type="text"
            id="startTime"
            name="startTime"
            value={event.startTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime" className="bold-label">End Time:</label>
          <span className="light-grey-text">{originalEvent.endTime}</span>
          <input
            type="text"
            id="endTime"
            name="endTime"
            value={event.endTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="bold-label">Location:</label>
          <span className="light-grey-text">{originalEvent.location}</span>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Event</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin')}>Back</button>
      </form>
      <AccessibilityOptions />
    </div>
  );
};

export default AdminEditEvent;