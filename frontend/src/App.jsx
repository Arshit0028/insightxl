import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Dashboard from '../src/pages/Dashboard';
import UploadPage from '../src/pages/UploadPage';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Protected or main routes */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Upload" element={<UploadPage />} />
        <Route path="/Emailreports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        {/* Fallback route */}
        <Route path="*" element={<div className="p-6 text-center text-xl">404 - Page Not Found</div>} />
      </Routes>
    </Router>

  );
}

export default App;
