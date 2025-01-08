import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Event {
  eventId: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
}

const EventDetailsHome = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (eventId) {
      fetchEventDetails(eventId);
    }
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, [eventId]);

  const fetchEventDetails = async (id: string) => {
    try {
      console.log(`Fetching event details for ID: ${id}`); // Debugging
      const response = await fetch(`/api/v1/Event/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch event details');
      }
      const data = await response.json();
      console.log('Event details response:', data); // Debugging
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event details:', error);
      setError('Failed to fetch event details');
    } finally {
      setLoading(false);
    }
  };

  const handleAttend = async () => {
    if (!userId) {
      alert('User not logged in.');
      return;
    }

    try {
      const response = await fetch('/api/v1/AttendanceModification/AddAttendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          eventId: parseInt(eventId!),
          userId: parseInt(userId),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to attend event');
      }

      const data = await response.json();
      alert(`You are now attending the event. Welcome, ${data.username}!`);
    } catch (error) {
      console.error('Error attending event:', error);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Event Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
      <p><strong>Start Time:</strong> {event.startTime}</p>
      <p><strong>End Time:</strong> {event.endTime}</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '30px' }} onClick={goBack}>Go Back</button>
        <button onClick={handleAttend}>Attend Event</button>
      </div>
      {userId && (
        <div>
          <h2>User ID:</h2>
          <p>{userId}</p>
        </div>
      )}
    </div>
  );
};

export default EventDetailsHome;