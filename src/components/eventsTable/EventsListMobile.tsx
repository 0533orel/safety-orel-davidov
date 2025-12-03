import React from 'react';
import { Stack, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { type SafetyEvent } from '../../types/safetyEvent';

interface EventsListMobileProps {
    events: SafetyEvent[];
    onViewDetails: (event: SafetyEvent) => void;
}

const EventsListMobile: React.FC<EventsListMobileProps> = ({ events, onViewDetails }) => {

    const truncate = (text: string | undefined, max: number = 80) => {
        if (!text) return '';
        return text.length > max ? text.slice(0, max) + '...' : text;
    };

    if (events.length === 0) {
        return (
            <Typography align="center" color="text.secondary">
                לא נמצאו אירועים תואמים.
            </Typography>
        );
    }

    return (
        <Stack spacing={2}>
            {events.map((event) => (
                <Card key={event.id} sx={{ borderRadius: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="subtitle2" color="text.secondary">
                            אירוע #{event.id}
                        </Typography>
                        <Typography variant="body2">
                            <strong>מועד האירוע:</strong> {event.eventDate} {event.eventTime}
                        </Typography>
                        <Typography variant="body2"><strong>יחידה:</strong> {event.unitName}</Typography>
                        <Typography variant="body2"><strong>מיקום:</strong> {event.location}</Typography>
                        <Typography variant="body2"><strong>חומרה:</strong> {event.eventSeverity}</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <strong>תיאור:</strong> {truncate(event.description)}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end', pr: 2, pb: 2 }}>
                        <Button size="small" variant="outlined" onClick={() => onViewDetails(event)}>
                            פרטים
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Stack>
    );
};

export default EventsListMobile;