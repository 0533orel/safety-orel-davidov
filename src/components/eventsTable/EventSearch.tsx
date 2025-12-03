import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface EventSearchProps {
    value: string;
    onChange: (value: string) => void;
}

const EventSearch: React.FC<EventSearchProps> = ({ value, onChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <TextField
                variant="outlined"
                placeholder="חפש לפי מספר אירוע, יחידה, מיקום או תיאור..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                sx={{
                    bgcolor: 'background.paper',
                    width: { xs: '100%', sm: '70%', md: '50%' },
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default EventSearch;