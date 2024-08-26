import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import ResetPassword from './pages/Auth/ResetPassword';
import Home from './pages/Home/index';

function Rota() {
  return (
    <Router>
      <Routes>
        <Route path="/auDigital" element={<Login />} />
        <Route path="/auDigital/reset" element={<ResetPassword />} />
        <Route path="/auDigital/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Rota;
