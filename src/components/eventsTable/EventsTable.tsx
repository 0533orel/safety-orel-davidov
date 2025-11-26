import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, Box
} from '@mui/material';
import { useSafetyEvents } from '../../context/SafetyContext';

const EventsTable: React.FC = () => {
    // 1. שליפת רשימת האירועים מהמחסן המרכזי
    const { events } = useSafetyEvents();

    // 2. אם אין אירועים, נציג הודעה יפה במקום טבלה ריקה
    if (events.length === 0) {
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
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                רשימת אירועי בטיחות
            </Typography>

            <TableContainer component={Paper} elevation={3}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: 'primary.main' }}>
                        <TableRow>
                            {/* כותרות הטבלה - צבע לבן בגלל הרקע הכחול */}
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>מספר אירוע</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>תאריך דיווח</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>יחידה</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>מיקום</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>קטגוריה</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>חומרה</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                key={event.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {event.id}
                                </TableCell>
                                <TableCell>
                                    {/* המרת המספר (Timestamp) לתאריך קריא */}
                                    {new Date(event.createdAt).toLocaleDateString('he-IL')} {new Date(event.createdAt).toLocaleTimeString('he-IL')}
                                </TableCell>
                                <TableCell>{event.unitName}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell>{event.category}</TableCell>
                                <TableCell>{event.eventSeverity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EventsTable;