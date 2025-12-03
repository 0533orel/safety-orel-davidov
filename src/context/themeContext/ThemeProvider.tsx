import React, { useState, useMemo, type ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from './ThemeContext';
import type { ThemeContextType } from './ThemeContextType.ts';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const theme = useMemo(
        () =>
            createTheme({
                direction: 'rtl',
                palette: {
                    mode: mode,
                    primary: { main: '#1976d2' },
                    background: {
                        default: mode === 'light' ? '#f4f6f8' : 'rgba(18,18,18,0.95)',
                    },
                },
                typography: { fontFamily: 'Rubik, Arial, sans-serif' },
            }),
        [mode]
    );

    const toggleColorMode: ThemeContextType['toggleColorMode'] = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleColorMode }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};
