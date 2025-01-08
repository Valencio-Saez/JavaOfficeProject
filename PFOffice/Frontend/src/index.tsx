import * as React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminAddEvent from "./pages/AdminAddEvent";
import AdminEditEvent from "./pages/AdminEditEvent";
import AdminViewAttendees from "./pages/AdminViewAttendees";
import AccessibilityOptions from "./pages/AccessibilityOptions";

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/edit-event/:eventId" element={<AdminEditEvent />} />
                    <Route path="/event/:eventId/attendees" element={<AdminViewAttendees />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );