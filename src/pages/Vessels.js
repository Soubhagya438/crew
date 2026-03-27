import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import VesselModal from '../components/ui/VesselModal';
import VoyageModal from '../components/ui/VoyageModal';
import '../styles/pages/Vessels.css';

const Vessels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVesselType, setSelectedVesselType] = useState('');
  const [selectedFleet, setSelectedFleet] = useState('');
  const [isVesselModalOpen, setIsVesselModalOpen] = useState(false);
  const [isVoyageModalOpen, setIsVoyageModalOpen] = useState(false);

  const handleAddVesselClick = () => {
    setIsVesselModalOpen(true);
  };

  const handleNewVoyageClick = () => {
    setIsVoyageModalOpen(true);
  };

  const handleCloseVesselModal = () => {
    setIsVesselModalOpen(false);
  };

  const handleCloseVoyageModal = () => {
    setIsVoyageModalOpen(false);
  };

  const vessels = [
    {
      id: 1,
      name: 'LNG Zenith Tide',
      type: 'LNG Carrier',
      fleet: 'LNG Fleet',
      status: 'Active',
      imo: '9876543',
      flag: 'Panama',
      yearBuilt: '2018',
      dwt: '174,000',
      currentVoyage: 'VOY-2024-001',
      eta: '2024-03-25'
    },
    {
      id: 2,
      name: 'MS Sea Horizon',
      type: 'Container Ship',
      fleet: 'Container Fleet',
      status: 'Active',
      imo: '8765432',
      flag: 'Liberia',
      yearBuilt: '2019',
      dwt: '85,000',
      currentVoyage: 'VOY-2024-002',
      eta: '2024-03-28'
    },
    {
      id: 3,
      name: 'MT Atlas Star',
      type: 'Oil Tanker',
      fleet: 'Tanker Fleet',
      status: 'In Port',
      imo: '7654321',
      flag: 'Marshall Islands',
      yearBuilt: '2020',
      dwt: '105,000',
      currentVoyage: 'VOY-2024-003',
      eta: '2024-03-30'
    },
    {
      id: 4,
      name: 'MV Pacific Dream',
      type: 'Bulk Carrier',
      fleet: 'Bulk Fleet',
      status: 'Sailing',
      imo: '6543210',
      flag: 'Singapore',
      yearBuilt: '2017',
      dwt: '180,000',
      currentVoyage: 'VOY-2024-004',
      eta: '2024-04-02'
    },
    {
      id: 5,
      name: 'MV Atlantic Pearl',
      type: 'Ro-Ro',
      fleet: 'Ro-Ro Fleet',
      status: 'Maintenance',
      imo: '5432109',
      flag: 'Bahamas',
      yearBuilt: '2016',
      dwt: '45,000',
      currentVoyage: '-',
      eta: '-'
    }
  ];

  const vesselTypes = ['All Types', 'LNG Carrier', 'Container Ship', 'Oil Tanker', 'Bulk Carrier', 'Ro-Ro'];
  const fleets = ['All Fleets', 'LNG Fleet', 'Container Fleet', 'Tanker Fleet', 'Bulk Fleet', 'Ro-Ro Fleet'];

  const filteredVessels = vessels.filter(vessel => {
    const matchesSearch = vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vessel.imo.includes(searchTerm);
    const matchesType = !selectedVesselType || selectedVesselType === 'All Types' || vessel.type === selectedVesselType;
    const matchesFleet = !selectedFleet || selectedFleet === 'All Fleets' || vessel.fleet === selectedFleet;
    
    return matchesSearch && matchesType && matchesFleet;
  });

  return (
    <div className="vessels">
      <Navbar />
      <div className="vessels-content">
        <div className="vessels-header">
          <h1>Vessels & Voyages</h1>
          <div className="header-actions">
            <button className="btn btn-primary" onClick={handleAddVesselClick}>Add Vessel</button>
            <button className="btn btn-secondary" onClick={handleNewVoyageClick}>New Voyage</button>
          </div>
        </div>

        <div className="vessels-main">
          <div className="vessels-sidebar">
            <div className="search-section">
              <input
                type="text"
                placeholder="Search vessels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-section">
              <div className="filter-group">
                <label>Vessel Type</label>
                <select
                  value={selectedVesselType}
                  onChange={(e) => setSelectedVesselType(e.target.value)}
                  className="filter-select"
                >
                  {vesselTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="fleet-section">
              <h3>Fleet</h3>
              <div className="fleet-list">
                <div className={`fleet-item ${selectedFleet === 'All Fleets' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('All Fleets')}>
                  <span className="fleet-icon">🚢</span>
                  <span>All Fleets</span>
                  <span className="fleet-count">{vessels.length}</span>
                </div>
                <div className={`fleet-item ${selectedFleet === 'LNG Fleet' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('LNG Fleet')}>
                  <span className="fleet-icon">⛽</span>
                  <span>LNG Fleet</span>
                  <span className="fleet-count">1</span>
                </div>
                <div className={`fleet-item ${selectedFleet === 'Container Fleet' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('Container Fleet')}>
                  <span className="fleet-icon">📦</span>
                  <span>Container Fleet</span>
                  <span className="fleet-count">1</span>
                </div>
                <div className={`fleet-item ${selectedFleet === 'Tanker Fleet' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('Tanker Fleet')}>
                  <span className="fleet-icon">⛽</span>
                  <span>Tanker Fleet</span>
                  <span className="fleet-count">1</span>
                </div>
                <div className={`fleet-item ${selectedFleet === 'Bulk Fleet' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('Bulk Fleet')}>
                  <span className="fleet-icon">⚓</span>
                  <span>Bulk Fleet</span>
                  <span className="fleet-count">1</span>
                </div>
                <div className={`fleet-item ${selectedFleet === 'Ro-Ro Fleet' ? 'active' : ''}`} 
                     onClick={() => setSelectedFleet('Ro-Ro Fleet')}>
                  <span className="fleet-icon">🚗</span>
                  <span>Ro-Ro Fleet</span>
                  <span className="fleet-count">1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="vessels-list">
            {filteredVessels.map(vessel => (
              <div key={vessel.id} className="vessel-card">
                <div className="vessel-header">
                  <div className="vessel-name-section">
                    <h3>{vessel.name}</h3>
                    <span className={`vessel-status ${vessel.status.toLowerCase().replace(' ', '-')}`}>
                      {vessel.status}
                    </span>
                  </div>
                  <div className="vessel-actions">
                    <button className="action-btn view-btn">View Details</button>
                    <button className="action-btn edit-btn">Edit</button>
                  </div>
                </div>
                
                <div className="vessel-details">
                  <div className="detail-row">
                    <span className="detail-label">Type:</span>
                    <span className="detail-value">{vessel.type}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">IMO:</span>
                    <span className="detail-value">{vessel.imo}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Flag:</span>
                    <span className="detail-value">{vessel.flag}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Year Built:</span>
                    <span className="detail-value">{vessel.yearBuilt}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">DWT:</span>
                    <span className="detail-value">{vessel.dwt}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Current Voyage:</span>
                    <span className="detail-value">{vessel.currentVoyage}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">ETA:</span>
                    <span className="detail-value">{vessel.eta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <VesselModal isOpen={isVesselModalOpen} onClose={handleCloseVesselModal} />
      <VoyageModal isOpen={isVoyageModalOpen} onClose={handleCloseVoyageModal} />
    </div>
  );
};

export default Vessels;
