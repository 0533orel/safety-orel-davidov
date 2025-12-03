import React from 'react';
import {
    TableContainer, Paper, Table, TableHead, TableRow,
    TableCell, TableBody, Button, Typography
} from '@mui/material';
import { type SafetyEvent } from '../../types/safetyEvent';

interface EventsListDesktopProps {
    events: SafetyEvent[];
    onViewDetails: (event: SafetyEvent) => void;
}

const EventsListDesktop: React.FC<EventsListDesktopProps> = ({ events, onViewDetails }) => {

    const truncate = (text: string | undefined, max: number = 50) => {
        if (!text) return '';
        return text.length > max ? text.slice(0, max) + '...' : text;
    };

    if (events.length === 0) {
        return (
            <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>
                לא נמצאו אירועים תואמים.
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
            <Table
                sx={{
                    minWidth: 900,
                    '& th': { fontWeight: 'bold', bgcolor: 'primary.main', color: 'white' },
                    '& th, & td': {
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'divider',
                        px: 1
                    }
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>מספר אירוע</TableCell>
                        <TableCell>תאריך</TableCell>
                        <TableCell>יחידה</TableCell>
                        <TableCell>מיקום</TableCell>
                        <TableCell>קטגוריה</TableCell>
                        <TableCell>חומרה</TableCell>
                        <TableCell>תוצאות</TableCell>
                        <TableCell width="20%">תיאור קצר</TableCell>
                        <TableCell>פרטים</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event.id} hover>
                            <TableCell>{event.id}</TableCell>
                            <TableCell>
                                {event.eventDate} {event.eventTime}
                            </TableCell>
                            <TableCell>{event.unitName}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.category}</TableCell>
                            <TableCell>{event.eventSeverity}</TableCell>
                            <TableCell>{event.result}</TableCell>
                            <TableCell title={event.description}>{truncate(event.description)}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onViewDetails(event)}
                                >
                                    פרטים
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EventsListDesktop;