import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Box, Tooltip} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SecurityIcon from '@mui/icons-material/Security';


interface HeaderProps {
    mode: 'light' | 'dark';
    onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({mode, onToggleTheme}) => {
    return (
        <AppBar position='sticky' elevation={3}>
            <Toolbar>
                <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
                    <SecurityIcon sx={{fontSize: 40, mr: 2}}/>
                    <Box>
                        <Typography variant='h6' component='div' sx={{fontWeight: 'bold', lineHeight: 1.2}}>
                            מב"ט
                        </Typography>
                        <Typography variant='subtitle2' sx={{opacity: 0.8}}>
                            מערכת בטיחות זרוע היבשה
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Tooltip title={mode === 'dark' ? 'עבור למצב יום'  : 'עבור למצב לילה'}>
                        <IconButton onClick={onToggleTheme} color='inherit'>
                            {mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>

    )
}


export default Header