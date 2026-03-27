import React, { useState, useRef } from 'react';
import '../../styles/components/VesselModal.css';

const VesselModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    vesselName: '',
    vesselType: '',
    imoNumber: '',
    flag: '',
    yearBuilt: '',
    dwt: ''
  });

  const vesselTypes = [
    'LNG Carrier',
    'Container Ship', 
    'Oil Tanker',
    'Bulk Carrier',
    'Ro-Ro'
  ];

  const flags = [
    'Panama',
    'Liberia', 
    'Marshall Islands',
    'Singapore',
    'Bahamas'
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
    console.log('Vessel form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="vessel-modal-overlay" onClick={onClose}>
      <div className="vessel-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="vessel-modal-header">
          <h2>Add Vessel</h2>
          <button className="vessel-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="vessel-modal-body">
          <form onSubmit={handleSubmit} className="vessel-form">
            {/* Form Fields */}
            <div className="vessel-form-grid">
              {/* Basic Information */}
              <div className="vessel-form-section">
                <h3>Basic Information</h3>
                <div className="vessel-form-row">
                  <div className="vessel-form-group">
                    <label>Vessel Name *</label>
                    <input
                      type="text"
                      name="vesselName"
                      value={formData.vesselName}
                      onChange={handleChange}
                      required
                      placeholder="Enter vessel name"
                    />
                  </div>
                  <div className="vessel-form-group">
                    <label>Vessel Type *</label>
                    <select
                      name="vesselType"
                      value={formData.vesselType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Type</option>
                      {vesselTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="vessel-form-row">
                  <div className="vessel-form-group">
                    <label>IMO Number *</label>
                    <input
                      type="text"
                      name="imoNumber"
                      value={formData.imoNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter IMO number"
                    />
                  </div>
                  <div className="vessel-form-group">
                    <label>Flag *</label>
                    <select
                      name="flag"
                      value={formData.flag}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Flag</option>
                      {flags.map(flag => (
                        <option key={flag} value={flag}>{flag}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="vessel-form-row">
                  <div className="vessel-form-group">
                    <label>Year Built *</label>
                    <input
                      type="number"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 2018"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>
                  <div className="vessel-form-group">
                    <label>DWT *</label>
                    <input
                      type="text"
                      name="dwt"
                      value={formData.dwt}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 174,000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="vessel-modal-actions">
              <button type="button" className="vessel-btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="vessel-btn-submit">
                ✓ Add Vessel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VesselModal;
