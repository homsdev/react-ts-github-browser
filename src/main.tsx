import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import {Routes} from "./Routes";
import {AppProvider} from "./context/UseAppContext.tsx";
import {ThemeProvider} from "@mui/material";
import {theme} from "./context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Routes/>
            </AppProvider>
        </ThemeProvider>
    </StrictMode>,
)
