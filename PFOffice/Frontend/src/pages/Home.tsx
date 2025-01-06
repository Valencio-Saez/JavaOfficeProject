import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/api/v1/Login/IsUserLoggedIn', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.data.IsLoggedIn) {
        navigate('/login'); // Niet-ingelogd: doorsturen naar de loginpagina
      } else {
        fetchEvents(); // Ingelogd: haal evenementen op
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      navigate('/login'); // Bij een fout: doorsturen naar de loginpagina
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/v1/Event/GetAllEvents');
      const futureEvents = response.data.filter((event: Event) => new Date(event.startDate) > new Date());
      setEvents(futureEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEventClick = (id: number) => {
    navigate(`/events/${id}`); // Navigeren naar de detailpagina van een evenement
  };

  return (
    <div>
      <h1>Upcoming Events</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{new Date(event.startDate).toLocaleString()}</td>
              <td>
                <button onClick={() => handleEventClick(event.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
