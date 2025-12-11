import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import EventsListPage from '../pages/EventsListPage';
import NewEventPage from '../pages/NewEventPage';
import AboutPage from '../pages/AboutPage';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsListPage />} />
                <Route path="/new-event" element={<NewEventPage />} />
                <Route path="/edit-event/:id" element={<NewEventPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;