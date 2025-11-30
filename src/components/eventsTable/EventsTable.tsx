import React, {useState} from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, Box, TextField, InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useSafetyEvents} from '../../context/SafetyContext';

const EventsTable: React.FC = () => {
    const {events} = useSafetyEvents();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = events.filter((event) => {
        const lowerTerm = searchTerm.toLowerCase();

        return (
            event.id.includes(lowerTerm) ||
            event.unitName.includes(searchTerm) ||
            event.description.includes(searchTerm) ||
            event.location.includes(searchTerm) ||
            event.category.includes(searchTerm)
        );
    });

    if (events.length === 0) {
        return (
            <Box sx={{textAlign: 'center', mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1}}>
                <Typography variant="h6" color="text.secondary">
                    טרם הוזנו אירועים במערכת.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h5" sx={{mb: 2, fontWeight: 'bold'}}>
                רשימת אירועי בטיחות
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="חפש לפי מספר אירוע, יחידה, מיקום או תיאור..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{mb: 3, bgcolor: 'background.paper'}}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action"/>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <TableContainer component={Paper} elevation={3}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead sx={{bgcolor: 'primary.main'}}>
                        <TableRow>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>מספר אירוע</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>תאריך דיווח</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>יחידה</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>מיקום</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>קטגוריה</TableCell>
                            <TableCell sx={{color: 'white', fontWeight: 'bold'}}>חומרה</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredEvents.length > 0 ?
                            (
                                filteredEvents.map((event) => (
                                    <TableRow
                                        key={event.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        hover
                                    >
                                        <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}}>
                                            {event.id}
                                        </TableCell>
                                        <TableCell>
                                            {new Date(event.createdAt).toLocaleDateString('he-IL')} {new Date(event.createdAt).toLocaleTimeString('he-IL', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                        </TableCell>
                                        <TableCell>{event.unitName}</TableCell>
                                        <TableCell>{event.location}</TableCell>
                                        <TableCell>{event.category}</TableCell>
                                        <TableCell>{event.eventSeverity}</TableCell>
                                    </TableRow>
                                ))
                            ) :
                            (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{py: 3}}>
                                        <Typography variant="body1" color="text.secondary">
                                            לא נמצאו אירועים התואמים לחיפוש "{searchTerm}"
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EventsTable;