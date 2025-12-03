import React from 'react';
import {Box, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import SafetyForm from '../components/safetyForm/SafetyForm';


const NewEventPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Button
                startIcon={<ArrowForwardIcon sx={{ml:1}}/>}
                onClick={() => navigate('/')}
                sx={{mb: 2}}
            >
                חזרה לדף הבית
            </Button>

            <Box sx={{bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3}}>
                <SafetyForm/>
            </Box>
        </Box>
    )
}

export default NewEventPage