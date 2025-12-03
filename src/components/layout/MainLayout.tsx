import React from 'react';
import {Box, Container} from '@mui/material';
import {useLocation, Outlet} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {useColorMode} from "../../context/themeContext/useColorMode.ts";


const MainLayout: React.FC = () => {
    const {mode} = useColorMode();
    const location = useLocation();
    const isEventsPage = location.pathname === '/events';

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>

            <Header/>

            <Container
                component="main"
                maxWidth={isEventsPage ? false : 'md'}
                sx={{minHeight: '100%', mt: 4, mb: 4, flexGrow: 1}}
            >
                <Box
                    sx={{
                        bgcolor: mode === 'dark' ? 'rgba(18,18,18,0.83)' : 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Outlet/>
                </Box>
            </Container>

            <Footer/>
        </Box>
    );
};

export default MainLayout;