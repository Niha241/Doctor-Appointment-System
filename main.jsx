import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { StrictMode } from 'react'





createRoot(document.getElementById('root')).render(
 
  <StrictMode>
  <BrowserRouter>
  <AdminContextProvider>
    <DoctorContextProvider>
      <AppContextProvider>

        <App />
      </AppContextProvider>
      </DoctorContextProvider>
  </AdminContextProvider>
  
  </BrowserRouter>
  </StrictMode>
    
  
)
