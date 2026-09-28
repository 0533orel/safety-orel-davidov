import React, { useState } from 'react';
import { Box, Typography, Button, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { type SafetyEvent } from '../../types/safetyEvent';
import EventSearch from './EventSearch';
import EventsListMobile from './EventsListMobile';
import EventsListDesktop from './EventsListDesktop';
import EventDetailsDialog from './EventDetailsDialog';
import {useSafetyEvents} from "../../context/safetyContext/useSafetyEvents.ts";


const EventsTable: React.FC = () => {
    const { events, deleteEvent, loadMore, hasMore, loading, error} = useSafetyEvents();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState<SafetyEvent | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const filteredEvents = events.filter((event) => {
        const lowerTerm = searchTerm.toLowerCase();
        return (
            event.id.toString().includes(lowerTerm) ||
            event.unitName?.toLowerCase().includes(lowerTerm) ||
            event.description?.toLowerCase().includes(lowerTerm) ||
            event.location?.toLowerCase().includes(lowerTerm) ||
            event.category?.toLowerCase().includes(lowerTerm)
        );
    });

    const handleOpenDetails = (event: SafetyEvent) => {
        setSelectedEvent(event);
        setIsDialogOpen(true);
    };

    const handleCloseDetails = () => {
        setSelectedEvent(null);
        setIsDialogOpen(false);
    };

    const handleDeleteEvent = (eventId: number) => {
        deleteEvent(eventId);

        if (selectedEvent && selectedEvent.id === eventId) {
            setSelectedEvent(null);
            setIsDialogOpen(false);
        }
    };


    if (events.length === 0 && !hasMore && !loading && !error) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="h6" color="text.secondary">
                    טרם הוזנו אירועים במערכת.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                רשימת אירועי בטיחות
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}
            {loading && <Typography role="status">טוען אירועים…</Typography>}
            <Typography variant="body2">החיפוש מתבצע באירועים שנטענו ({events.length}).</Typography>
            <EventSearch value={searchTerm} onChange={setSearchTerm} />

            {isMobile ? (
                <EventsListMobile
                    events={filteredEvents}
                    onViewDetails={handleOpenDetails}
                    onDelete={handleDeleteEvent}
                />
            ) : (
                <EventsListDesktop
                    events={filteredEvents}
                    onViewDetails={handleOpenDetails}
                    onDelete={handleDeleteEvent}
                />
            )}

            {hasMore && <Button onClick={() => void loadMore()} disabled={loading}>טען אירועים נוספים</Button>}
            <EventDetailsDialog
                open={isDialogOpen}
                onClose={handleCloseDetails}
                event={selectedEvent}
            />
        </Box>
    );
};

export default EventsTable;
