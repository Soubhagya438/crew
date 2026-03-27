import React, { useState } from 'react';
import '../../styles/components/VoyageModal.css';

const VoyageModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    voyageId: '',
    vesselName: '',
    voyageNumber: '',
    departurePort: '',
    arrivalPort: '',
    departureDate: '',
    arrivalDate: '',
    cargoType: '',
    cargoQuantity: ''
  });

  const vessels = [
    'LNG Zenith Tide',
    'MS Sea Horizon',
    'MT Atlas Star',
    'MV Pacific Dream',
    'MV Atlantic Pearl'
  ];

  const ports = [
    'Singapore',
    'Rotterdam',
    'Shanghai',
    'Dubai',
    'Houston',
    'Hong Kong',
    'Los Angeles',
    'New York',
    'London',
    'Tokyo'
  ];

  const cargoTypes = [
    'LNG',
    'Container',
    'Crude Oil',
    'Bulk Cargo',
    'Chemicals',
    'General Cargo',
    'Passengers',
    'Vehicles'
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
    console.log('Voyage form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="voyage-modal-overlay" onClick={onClose}>
      <div className="voyage-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="voyage-modal-header">
          <h2>New Voyage</h2>
          <button className="voyage-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="voyage-modal-body">
          <form onSubmit={handleSubmit} className="voyage-form">
            <div className="voyage-form-grid">
              {/* Voyage Information */}
              <div className="voyage-form-section">
                <h3>Voyage Information</h3>
                <div className="voyage-form-row">
                  <div className="voyage-form-group">
                    <label>Voyage ID *</label>
                    <input
                      type="text"
                      name="voyageId"
                      value={formData.voyageId}
                      onChange={handleChange}
                      required
                      placeholder="Enter voyage ID"
                    />
                  </div>
                  <div className="voyage-form-group">
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
                <div className="voyage-form-row">
                  <div className="voyage-form-group">
                    <label>Voyage Number *</label>
                    <input
                      type="text"
                      name="voyageNumber"
                      value={formData.voyageNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter voyage number"
                    />
                  </div>
                </div>
              </div>

              {/* Route Information */}
              <div className="voyage-form-section">
                <h3>Route Information</h3>
                <div className="voyage-form-row">
                  <div className="voyage-form-group">
                    <label>Departure Port *</label>
                    <select
                      name="departurePort"
                      value={formData.departurePort}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Departure Port</option>
                      {ports.map(port => (
                        <option key={port} value={port}>{port}</option>
                      ))}
                    </select>
                  </div>
                  <div className="voyage-form-group">
                    <label>Arrival Port *</label>
                    <select
                      name="arrivalPort"
                      value={formData.arrivalPort}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Arrival Port</option>
                      {ports.map(port => (
                        <option key={port} value={port}>{port}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="voyage-form-row">
                  <div className="voyage-form-group">
                    <label>Departure Date *</label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="voyage-form-group">
                    <label>Arrival Date *</label>
                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Cargo Information */}
              <div className="voyage-form-section">
                <h3>Cargo Information</h3>
                <div className="voyage-form-row">
                  <div className="voyage-form-group">
                    <label>Cargo Type *</label>
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Cargo Type</option>
                      {cargoTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="voyage-form-group">
                    <label>Cargo Quantity *</label>
                    <input
                      type="text"
                      name="cargoQuantity"
                      value={formData.cargoQuantity}
                      onChange={handleChange}
                      required
                      placeholder="Enter cargo quantity"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="voyage-modal-actions">
              <button type="button" className="voyage-btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="voyage-btn-submit">
                ✓ Create Voyage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VoyageModal;
