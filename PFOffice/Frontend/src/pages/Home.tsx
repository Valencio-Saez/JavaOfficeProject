import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
}

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/v1/Login/IsLoggedIn', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((response) => {
        if (!response.data.IsLoggedIn) {
          navigate('/login');
        }
      })
      .catch(() => {
        navigate('/login');
      });

    axios.get('/api/v1/event')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [navigate]);

  const handleEventClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => handleEventClick(event.id)} style={{ cursor: 'pointer' }}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.startDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
