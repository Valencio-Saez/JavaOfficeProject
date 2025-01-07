import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';

interface Attendee {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

const AdminViewAttendees = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await fetch(`/api/v1/Event/${eventId}/attendees`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data && data.$values && Array.isArray(data.$values)) {
            setAttendees(data.$values);
          } else {
            console.error('Error: API response is not in the expected format');
          }
        } else {
          console.error('Error fetching attendees:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

    if (eventId) {
      fetchAttendees();
    }
  }, [eventId]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Event Attendees</h2>
      
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map(attendee => (
            <tr key={attendee.userId}>
              <td>{attendee.firstName}</td>
              <td>{attendee.lastName}</td>
              <td>{attendee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={() => navigate('/admin')}>Back to Dashboard</button>
      <AccessibilityOptions />
    </div>
  );
};

export default AdminViewAttendees;