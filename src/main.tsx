import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {SafetyProvider} from "./context/SafetyContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SafetyProvider>
            <App/>
        </SafetyProvider>
    </StrictMode>,
)
