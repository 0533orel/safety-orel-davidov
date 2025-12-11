import React, {useMemo} from 'react';
import {Box, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate, useParams} from 'react-router-dom';
import SafetyForm from '../components/safetyForm/SafetyForm';
import {useSafetyEvents} from "../context/safetyContext/useSafetyEvents.ts";


const NewEventPage: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const {events} = useSafetyEvents()

    const eventToEdit =useMemo(() => {
        if(!id) return undefined
        return events.find(e => e.id === Number(id))
    }, [id, events])

    return (
        <Box>
            <Button
                startIcon={<ArrowForwardIcon sx={{ml: 1}}/>}
                onClick={() => navigate('/')}
                sx={{mb: 2}}
            >
                חזרה לדף הבית
            </Button>

            <Box sx={{bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3}}>
                <SafetyForm initialData={eventToEdit}/>
            </Box>
        </Box>
    )
}

export default NewEventPage