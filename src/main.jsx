import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PoliceLoginComponent from './pages/homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PoliceLoginComponent />
  </StrictMode>,
)
