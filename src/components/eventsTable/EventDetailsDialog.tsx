import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Stack, Typography
} from '@mui/material';
import type {EventDetailsDialogTypes} from "./EventsTableTypes.ts";


const EventDetailsDialog: React.FC<EventDetailsDialogTypes> = ({ open, onClose, event }) => {
    if (!event) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>פרטי האירוע #{event.id}</DialogTitle>
            <DialogContent dividers>
                <Stack spacing={2}>
                    <Typography variant="body2">
                        <strong>תאריך דיווח למערכת:</strong> {new Date(event.createdAt).toLocaleString('he-IL')}
                    </Typography>

                    <Typography variant="body2">
                        <strong>מועד האירוע:</strong> {event.eventDate} בשעה {event.eventTime}
                    </Typography>

                    <Typography variant="body2"><strong>יחידה:</strong> {event.unitName}</Typography>
                    <Typography variant="body2"><strong>מיקום:</strong> {event.location}</Typography>
                    {event.coordinates && (
                        <Typography variant="body2"><strong>נ"צ:</strong> {event.coordinates}</Typography>
                    )}
                    <Typography variant="body2"><strong>קטגוריה:</strong> {event.category}</Typography>
                    <Typography variant="body2"><strong>חומרת האירוע:</strong> {event.eventSeverity}</Typography>
                    <Typography variant="body2"><strong>תוצאות האירוע:</strong> {event.result}</Typography>

                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                        <strong>תיאור האירוע:</strong><br />{event.description}
                    </Typography>

                    {event.recommendations && (
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                            <strong>המלצות ראשוניות:</strong><br />{event.recommendations}
                        </Typography>
                    )}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>סגור</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EventDetailsDialog;