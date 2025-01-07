import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const { eventId } = useParams<{ eventId: string }>(); // Haal het eventId uit de route
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true); // Nieuwe state om te beheren of we nog laden
  const navigate = useNavigate();

  useEffect(() => {
    if (eventId) {
      fetchEventDetails(eventId);
    }
  }, [eventId]);

  const fetchEventDetails = async (id: string) => {
    try {
      console.log(`Fetching event details for ID: ${id}`); // Debugging
      const response = await axios.get(`/api/v1/Event/${id}`);
      console.log('Event details response:', response.data); // Debugging
      setEvent(response.data); // Stel het specifieke evenement in
    } catch (error) {
      console.error('Error fetching event details:', error);
      alert('Failed to fetch event details');
    } finally {
      setLoading(false); // Stop met laden, ongeacht succes of fout
    }
  };

  const goBack = () => {
    navigate(-1); // Ga terug naar de vorige pagina
  };

  const goToAttendancePage = () => {
    navigate(`/events/${eventId}/attend`); // Verwijst naar een nieuwe pagina voor aanwezigheid
  };

  if (loading) {
    return <p>Loading event details...</p>; // Tonen zolang we aan het laden zijn
  }

  if (!event) {
    return <p>No event details found for this ID.</p>; // Tonen als er geen data is
  }

  return (
    <div>
      <h1>Event Details</h1>
      <p><strong>Title:</strong> {event.title}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Event Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
      <p><strong>Start Time:</strong> {event.startTime}</p>
      <p><strong>End Time:</strong> {event.endTime}</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '30px' }} onClick={goBack}>Go Back</button>
        <button onClick={goToAttendancePage}>Attend Event</button>
      </div>
      {/* <button onClick={goBack}>Go Back</button>
      <button onClick={goToAttendancePage}>Attend Event</button> */}
    </div>
  );
};

export default EventDetailsHome;
