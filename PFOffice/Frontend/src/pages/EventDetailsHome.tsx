import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  location: string;
}

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Haal details van het evenement op
    axios.get(`/api/v1/event/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.startDate).toLocaleString()}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
