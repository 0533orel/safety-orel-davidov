import React from 'react';
import {Box, Typography} from '@mui/material';


const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ?
                        theme.palette.grey[300] :
                        theme.palette.grey[800],
                textAlign: 'center'
            }}
        >
            <Typography variant='caption' color='text.secondary' display='block' sx={{mt: 1}}>
                {new Date().getFullYear()} &copy; אוראל דוידוב
            </Typography>
        </Box>
    );
};


export default Footer