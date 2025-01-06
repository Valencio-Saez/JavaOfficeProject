import * as React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminAddEvent from "./pages/AdminAddEvent";
// import EditEvent from "./pages/EditEvent";
// import EventAttendees from "./pages/EventAttendees";

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/add-event" element={<AdminAddEvent/>} /> */}

                </Routes>
            </Router>
        </React.StrictMode>
    );