import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ThemeProvider} from "next-themes";
import { AuthProvider } from './app/AuthContext.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google'

// 89218753144-upe1tif8kk82m8eqmaen5u9pktd6j7le.apps.googleusercontent.com

const clientID = "89218753144-upe1tif8kk82m8eqmaen5u9pktd6j7le.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
      <GoogleOAuthProvider clientId={clientID}>
       <AuthProvider>
        <App />
      </AuthProvider> 
      </GoogleOAuthProvider>
      
      
    </ThemeProvider>
    
  </StrictMode>,
)
