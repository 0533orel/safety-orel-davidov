import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import EventsTable from '../components/eventsTable/EventsTable';

const EventsListPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    יומן אירועים
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon sx={{ml: 1}}/>}
                    onClick={() => navigate('/new-event')}
                    sx={{pr: 0}}
                >
                    דיווח חדש
                </Button>
            </Box>

            <EventsTable />
        </Box>
    );
};

export default EventsListPage;