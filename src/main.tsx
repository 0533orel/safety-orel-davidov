import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import {SafetyProvider} from "./context/safetyContext/SafetyProvider.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SafetyProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </SafetyProvider>
    </StrictMode>,
)
