import { ThemeProvider } from './context/themeContext/ThemeProvider.tsx';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <ThemeProvider>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;