import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ThemeProvider} from "next-themes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
      <App />
    </ThemeProvider>
    
  </StrictMode>,
)
