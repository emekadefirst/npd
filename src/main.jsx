import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import { Toaster } from 'react-hot-toast';
import PoliceLoginComponent from './pages/homepage';
import DashBoard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Toaster /> {/* Move this outside of Routes */}
      <Routes>
        <Route path="/" element={<PoliceLoginComponent />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  </StrictMode>
);
