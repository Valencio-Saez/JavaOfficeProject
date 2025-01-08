import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';

const AdminAddEvent: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [alertShown, setAlertShown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkAdminLoggedIn();
    }, []);

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
                alert('Event added successfully!');
            } else {
                console.error('Error adding event:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

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

    return (
        checkAdminLoggedIn(),
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
                    <input type="text" id="eventDate" name="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="YYYY-MM-DD" />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime" className="bold-label">Start Time:</label>
                    <input type="text" id="startTime" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="HH:MM:SS" />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime" className="bold-label">End Time:</label>
                    <input type="text" id="endTime" name="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="HH:MM:SS" />
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="bold-label">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Event</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin')}>Back</button>
            </form>
            <AccessibilityOptions />
        </div>
    );
};

export default AdminAddEvent;