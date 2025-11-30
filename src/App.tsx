import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SafetyForm from '../src/components/SafetyForm';
import EventsTable from "./components/eventsTable/EventsTable.tsx";

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const theme = useMemo(
        () =>
            createTheme({
                direction: 'rtl',
                palette: {
                    mode: mode,
                    primary: {
                        main: '#1976d2',
                    },
                    background: {
                        default: mode === 'light' ? '#f4f6f8' : 'rgba(18,18,18,0.95)'
                    }
                },
                typography: {
                    fontFamily: 'Rubik, Arial, sans-serif',
                },
            }),
        [mode]
    );

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Header mode={mode} onToggleTheme={toggleColorMode} />

                <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                    <Box
                        sx={{
                            bgcolor: mode === 'dark' ? 'rgba(18,18,18,0.83)' : 'background.paper',
                            p: 4,
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    >
                        <SafetyForm />
                    </Box>
                </Container>

                <EventsTable/>

                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;