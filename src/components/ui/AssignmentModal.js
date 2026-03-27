import React, { useState } from 'react';
import '../../styles/components/AssignmentModal.css';

const AssignmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    crewName: '',
    vesselName: '',
    position: '',
    startDate: '',
    endDate: '',
    status: '',
    contractType: '',
    contactPhone: '',
    contactEmail: ''
  });

  const vessels = [
    'LNG Zenith Tide',
    'MS Sea Horizon',
    'MT Atlas Star',
    'MV Pacific Dream',
    'MV Atlantic Pearl'
  ];

  const positions = [
    'Captain',
    'Chief Engineer',
    'First Mate',
    'Second Engineer',
    'Deck Officer',
    'Chief Officer',
    'Second Mate',
    'Chief Steward'
  ];

  const contractTypes = [
    'Permanent',
    'Temporary',
    'Contract',
    'Seasonal'
  ];

  const statuses = [
    'Active',
    'On Leave',
    'Pending',
    'Completed'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assignment form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="assignment-modal-overlay" onClick={onClose}>
      <div className="assignment-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="assignment-modal-header">
          <h2>New Assignment</h2>
          <button className="assignment-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="assignment-modal-body">
          <form onSubmit={handleSubmit} className="assignment-form">
            <div className="assignment-form-grid">
              {/* Assignment Details */}
              <div className="assignment-form-section">
                <h3>Assignment Details</h3>
                <div className="assignment-form-row">
                  <div className="assignment-form-group">
                    <label>Crew Name *</label>
                    <input
                      type="text"
                      name="crewName"
                      value={formData.crewName}
                      onChange={handleChange}
                      required
                      placeholder="Enter crew member name"
                    />
                  </div>
                  <div className="assignment-form-group">
                    <label>Vessel Name *</label>
                    <select
                      name="vesselName"
                      value={formData.vesselName}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Vessel</option>
                      {vessels.map(vessel => (
                        <option key={vessel} value={vessel}>{vessel}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="assignment-form-row">
                  <div className="assignment-form-group">
                    <label>Position *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Position</option>
                      {positions.map(position => (
                        <option key={position} value={position}>{position}</option>
                      ))}
                    </select>
                  </div>
                  <div className="assignment-form-group">
                    <label>Contract Type *</label>
                    <select
                      name="contractType"
                      value={formData.contractType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Contract Type</option>
                      {contractTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="assignment-form-row">
                  <div className="assignment-form-group">
                    <label>Status *</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Status</option>
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Assignment Period */}
              <div className="assignment-form-section">
                <h3>Assignment Period</h3>
                <div className="assignment-form-row">
                  <div className="assignment-form-group">
                    <label>Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="assignment-form-group">
                    <label>End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="assignment-form-section">
                <h3>Contact Information</h3>
                <div className="assignment-form-row">
                  <div className="assignment-form-group">
                    <label>Contact Phone *</label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="assignment-form-group">
                    <label>Contact Email *</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="assignment-modal-actions">
              <button type="button" className="assignment-btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="assignment-btn-submit">
                ✓ Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignmentModal;
