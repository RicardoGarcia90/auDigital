import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import ResetPassword from './pages/Auth/ResetPassword';

function Rota() {
  return (
    <Router>
      <Routes>
        <Route path="/auDigital" element={<Login />} />
        <Route path="/auDigital/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default Rota;
