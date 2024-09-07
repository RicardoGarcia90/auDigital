import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import ResetPassword from './pages/Auth/ResetPassword';
import Home from './pages/Home/index';
import StudentManagement from './pages/StudentManagement/index';
import PlanRegistration from './pages/PlanRegistration/PlanRegistration';
import PaymentManagement from './pages/PaymentManagement/PaymentManagement';
import PortalAccessRegistration from './pages/PortalAccessRegistration/PortalAccessRegistration';
import Reports from './pages/Reports/Reports';
import Employees from './pages/Employees/Employees';

function Rota() {
  return (
    <Router>
      <Routes>
        <Route path="/auDigital" element={<Login />} />
        <Route path="/auDigital/reset" element={<ResetPassword />} />
        <Route path="/auDigital/home" element={<Home />} />
        <Route
          path="/auDigital/studentManagement"
          element={<StudentManagement />}
        />
        <Route
          path="/auDigital/planRegistration"
          element={<PlanRegistration />}
        />
        <Route
          path="/auDigital/paymentManagement"
          element={<PaymentManagement />}
        />
        <Route
          path="/auDigital/portalAccessRegistration"
          element={<PortalAccessRegistration />}
        />
        <Route path="/auDigital/reports" element={<Reports />} />
        <Route path="/auDigital/employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}

export default Rota;
