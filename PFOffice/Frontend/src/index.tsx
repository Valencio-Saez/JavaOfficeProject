import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminAddEvent from "./pages/AdminAddEvent";
import AdminEditEvent from "./pages/AdminEditEvent";
import AdminViewAttendees from "./pages/AdminViewAttendees";
import EventDetailsHome from "./pages/EventDetailsHome";
import AccessibilityOptions from "./pages/AccessibilityOptions";
import EventContext, { EventProvider } from "./EventContext";
import UserPage from "./pages/UserPage";
import LayoutFeature from './pages/LayoutFeature'; // Import the LayoutFeature page
import UserPastEvents from "./pages/UserPastEvents"; // Import the UserDashboard page


createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <EventProvider>
                <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events/:eventId" element={<EventDetailsHome />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/edit-event/:eventId" element={<AdminEditEvent />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/add-event" element={<AdminAddEvent />} />
                    <Route path="/events/:eventId/attendees" element={<AdminViewAttendees />} />
                    <Route path="/UserPastEvents" element={<UserPastEvents />} />
                    <Route path="/layout" element={<LayoutFeature />} />

                </Routes>
            </Router>
            </EventProvider>
            
        </React.StrictMode>
    );