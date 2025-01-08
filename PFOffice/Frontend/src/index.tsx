import * as React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddEvent from "./pages/AdminAddEvent";
import AdminEditEvent from "./pages/AdminEditEvent";
import AdminViewAttendees from "./pages/AdminViewAttendees";
import { EventProvider } from './EventContext';

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <EventProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/add-event" element={<AdminAddEvent/>} />
                        <Route path="/edit-event/:eventId" element={<AdminEditEvent/>} />    
                        <Route path="/event/:eventId/attendees" element={<AdminViewAttendees/>} />
                    </Routes>
                </Router>
            </EventProvider>
        </React.StrictMode>
    );