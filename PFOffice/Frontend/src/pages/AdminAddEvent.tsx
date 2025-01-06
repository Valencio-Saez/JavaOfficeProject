import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAddEvent: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/v1/Event/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    eventDate,
                    startTime,
                    endTime,
                    location
                })
            });

            if (response.ok) {
                navigate('/admin');
            } else {
                console.error('Error adding event:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AdminAddEvent;