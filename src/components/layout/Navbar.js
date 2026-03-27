import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SeafarerModal from '../ui/SeafarerModal';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [showSeafarerModal, setShowSeafarerModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleAddSeafarer = () => {
    setShowSeafarerModal(true);
    setShowLogoutMenu(false);
  };

  const handleEditProfile = () => {
    // Navigate to edit profile or open edit modal
    setShowLogoutMenu(false);
    // You can implement edit profile functionality here
    console.log('Edit profile clicked');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">
          <span className="anchor-icon">⚓</span>
        </div>
        <div className="brand-text">
          <span className="brand-name">CrewBridge</span>
          <span className="brand-subtitle">Maritime Crew Management</span>
        </div>
      </div>
      
      <div className="navbar-menu">
        <Link 
          to="/dashboard" 
          className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        <Link 
          to="/crew" 
          className={`nav-item ${location.pathname === '/crew' ? 'active' : ''}`}
        >
          Crew
        </Link>
        <Link 
          to="/vessels" 
          className={`nav-item ${location.pathname === '/vessels' ? 'active' : ''}`}
        >
          Vessels & Voyages
        </Link>
        <Link 
          to="/assignments" 
          className={`nav-item ${location.pathname === '/assignments' ? 'active' : ''}`}
        >
          Assignments
        </Link>
        <Link 
          to="/documents" 
          className={`nav-item ${location.pathname === '/documents' ? 'active' : ''}`}
        >
          Documents
        </Link>
        <Link 
          to="/reports" 
          className={`nav-item ${location.pathname === '/reports' ? 'active' : ''}`}
        >
          Reports
        </Link>
      </div>
      
      <div className="navbar-user">
        <div className="user-info" onClick={() => setShowLogoutMenu(!showLogoutMenu)}>
          <span className="user-name">{user?.name || 'Admin'}</span>
          <div className="user-avatar">
            <span>👤</span>
          </div>
        </div>
        
        {showLogoutMenu && (
          <div className="logout-menu">
            <button className="logout-btn" onClick={handleAddSeafarer}>
              <span>✏️</span>
              Edit
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              <span>🚪</span>
              Logout
            </button>
          </div>
        )}
      </div>
      
      <SeafarerModal 
        isOpen={showSeafarerModal} 
        onClose={() => setShowSeafarerModal(false)} 
      />
    </nav>
  );
};

export default Navbar;
