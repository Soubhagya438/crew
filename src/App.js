import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Login from './components/forms/Login';
import Dashboard from './pages/Dashboard';
import Crew from './pages/Crew';
import Vessels from './pages/Vessels';
import Assignments from './pages/Assignments';
import Documents from './pages/Documents';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/vessels" element={<Vessels />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
