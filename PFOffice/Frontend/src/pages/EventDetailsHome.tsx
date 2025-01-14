import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';

interface Event {
  eventId: number;
  title: string;
  description: string;  
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  reviews: { userName: string, review: string }[]; // Assuming reviews are in this structure
}

const EventDetailsHome = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUserAttending, setIsUserAttending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState<{ userName: string, review: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const response = await fetch('/api/v1/Login/IsUserLoggedIn', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setIsAuthenticated(data);
      if (!data) {
        navigate('/'); 
      } else {
        if (eventId) {
          fetchEventDetails(eventId);
          checkUserAttendance(eventId);
        }
      }
    } catch (error) {
      console.error('Error checking user login status:', error);
      navigate('/'); 
    }
  };

  const fetchEventDetails = async (id: string) => {
    try {
      console.log(`Fetching event details for ID: ${id}`); 
      const response = await fetch(`/api/v1/Event/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch event details');
      }
      const data = await response.json();
      console.log('Event details response:', data); 
      setEvent(data);
      setReviews(data.reviews || []); // Assuming reviews are part of the event data
    } catch (error) {
      console.error('Error fetching event details:', error);
      setError('Failed to fetch event details');
    } finally {
      setLoading(false);
    }
  };

  const checkUserAttendance = async (id: string) => {
    try {
      const response = await fetch(`/api/v1/Event/${id}/isUserAttending`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to check user attendance');
      }
      const data = await response.json();
      setIsUserAttending(data.isAttending);
    } catch (error) {
      console.error('Error checking user attendance:', error);
    }
  };

  const handleAttend = async () => {
    try {
      const response = await fetch('/api/v1/AttendanceModification/AddAttendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          eventId: parseInt(eventId!),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to attend event');
      }

      const data = await response.json();
      alert(`You are now attending the event. Welcome, ${data.UserName}!`);
      setIsUserAttending(true);
    } catch (error) {
      console.error('Error attending event:', error);
      alert((error as Error).message);
    }
  };

  const handleDeleteAttendance = async () => {
    try {
      const response = await fetch(`/api/v1/Event/${eventId}/specifieke`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to delete attendance');
      }

      alert('Attendance deleted successfully.');
      setIsUserAttending(false);
      navigate('/user'); 
    } catch (error) {
      console.error('Error deleting attendance:', error);
      alert((error as Error).message); 
    }
  };







  
  const handleReviewSubmit = async () => {
    if (!review.trim()) {
      alert('Please write a review before submitting.');
      return;
    }
  
    try {
      // Check the eventId value
      console.log('Submitting review for eventId:', eventId);
  
      const response = await fetch(`/api/v1/Event/${eventId}/addReview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          review,
        }),
      });
  
      if (!response.ok) {
        // Improved error handling
        let errorMessage = 'Failed to submit review';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (err) {
          console.error('Error parsing JSON response:', err);
        }
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      console.log('Review submission response:', data); // Log the response data
  
      alert('Review submitted successfully');
  
      // Assuming the response includes the username and review text
      setReviews((prevReviews) => [...prevReviews, { userName: data.userName, review: review }]);
  
      // Clear the review input after submission
      setReview('');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert((error as Error).message);
    }
  };
  
  const goBack = () => {
    navigate(-1);
  };

  if (isAuthenticated === null || loading) {
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
        {isUserAttending ? (
          <button onClick={handleDeleteAttendance}>Delete Attendance</button>
        ) : (
          <button onClick={handleAttend}>Attend Event</button>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Write a Review</h3>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          rows={4}
          style={{ width: '100%' }}
        />
        <button onClick={handleReviewSubmit} style={{ marginTop: '10px' }}>
          Submit Review
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>{review.userName}:</strong></p>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      <AccessibilityOptions />
    </div>
  );
};

export default EventDetailsHome;
