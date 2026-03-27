import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import SeafarerModal from '../components/ui/SeafarerModal';
import '../styles/pages/Admin.css';

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Open modal automatically when component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    // Navigate to dashboard when modal closes
    navigate('/dashboard');
  };

  return (
    <div className="admin">
      <Navbar />
      <SeafarerModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Admin;
