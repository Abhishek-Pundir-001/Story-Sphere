import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import StoreContextProvider from '../Context/StoreContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
      <Toaster />
    </StoreContextProvider>
  </BrowserRouter>
)
