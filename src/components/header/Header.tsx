import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Box, Tooltip} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {useNavigate} from 'react-router-dom';
import {useColorMode} from '../../context/themeContext/useColorMode';


const Header: React.FC = () => {
    const navigate = useNavigate();

    const { mode, toggleColorMode } = useColorMode();

    return (
        <AppBar position='sticky' elevation={3}>
            <Toolbar>
                <Box
                    sx={{display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer'}}
                    onClick={() => navigate('/')}
                >
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

                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <Tooltip title='דף הבית'>
                        <IconButton color="inherit" onClick={() => navigate('/')}>
                            <HomeIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='יומן אירועים'>
                        <IconButton color="inherit" onClick={() => navigate('/events')}>
                            <ListAltIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title='אודות'>
                        <IconButton color="inherit" onClick={() => navigate('/about')}>
                            <InfoIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title={mode === 'dark' ? 'עבור למצב יום' : 'עבור למצב לילה'}>
                        <IconButton onClick={toggleColorMode} color='inherit'>
                            {mode === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;