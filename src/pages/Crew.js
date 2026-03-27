import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import SeafarerModal from '../components/ui/SeafarerModal';
import '../styles/pages/Crew.css';

const Crew = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedVessel, setSelectedVessel] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCrewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Sample crew data - replace with actual data from your backend
  const crewMembers = [
    {
      id: 'CRW001',
      name: 'John Smith',
      rank: 'Captain',
      vessel: 'MV Neptune',
      nationality: 'British',
      status: 'ON BOARD'
    },
    {
      id: 'CRW002',
      name: 'Maria Garcia',
      rank: 'Chief Engineer',
      vessel: 'MV Neptune',
      nationality: 'Spanish',
      status: 'ON BOARD'
    },
    {
      id: 'CRW003',
      name: 'Li Wei',
      rank: 'First Mate',
      vessel: 'MV Poseidon',
      nationality: 'Chinese',
      status: 'ON LEAVE'
    },
    {
      id: 'CRW004',
      name: 'Ahmed Hassan',
      rank: 'Second Engineer',
      vessel: 'MV Poseidon',
      nationality: 'Egyptian',
      status: 'ON BOARD'
    },
    {
      id: 'CRW005',
      name: 'James Wilson',
      rank: 'Deck Officer',
      vessel: 'MV Atlantic',
      nationality: 'American',
      status: 'AVAILABLE'
    },
    {
      id: 'CRW006',
      name: 'Elena Rodriguez',
      rank: 'Chief Mate',
      vessel: 'MV Neptune',
      nationality: 'Filipino',
      status: 'ON BOARD'
    }
  ];

  const ranks = ['Captain', 'Chief Engineer', 'First Mate', 'Second Engineer', 'Deck Cadet'];
  const statuses = ['On Board', 'On Leave', 'Available', 'Unavailable'];
  const vessels = ['MV Neptune', 'MV Poseidon', 'MV Atlantic'];
  const nationalities = ['British', 'Spanish', 'Chinese', 'Egyptian', 'American', 'Filipino'];

  const filteredCrew = crewMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRank = !selectedRank || member.rank === selectedRank;
    const matchesStatus = !selectedStatus || member.status === selectedStatus;
    const matchesVessel = !selectedVessel || member.vessel === selectedVessel;
    const matchesNationality = !selectedNationality || member.nationality === selectedNationality;
    
    return matchesSearch && matchesRank && matchesStatus && matchesVessel && matchesNationality;
  });

  return (
    <div className="crew">
      <Navbar />
      <div className="crew-content">
        <div className="crew-header">
          <h1>Crew Directory</h1>
          <div className="crew-actions">
            <button className="btn btn-primary" onClick={handleAddCrewClick}>Add Crew Member</button>
            <button className="btn btn-secondary">Export</button>
          </div>
        </div>

        <div className="crew-main-and-sidebar">
          <div className="crew-main">
            <div className="crew-filters">
              <div className="filter-group">
                <input
                  type="text"
                  placeholder="Name or Crew ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="filter-input"
                />
              </div>
              
              <div className="filter-group">
                <select
                  value={selectedRank}
                  onChange={(e) => setSelectedRank(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Ranks</option>
                  {ranks.map(rank => (
                    <option key={rank} value={rank}>{rank}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <select
                  value={selectedVessel}
                  onChange={(e) => setSelectedVessel(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Vessels</option>
                  {vessels.map(vessel => (
                    <option key={vessel} value={vessel}>{vessel}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <select
                  value={selectedNationality}
                  onChange={(e) => setSelectedNationality(e.target.value)}
                  className="filter-select"
                >
                  <option value="">All Nationalities</option>
                  {nationalities.map(nationality => (
                    <option key={nationality} value={nationality}>{nationality}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="crew-table-container">
              <table className="crew-table">
                <thead>
                <tr>
                  <th>Name/ID</th>
                  <th>Nationality</th>
                  <th>Rank</th>
                  <th>Vessel</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrew.map(member => (
                  <tr key={member.id}>
                    <td>
                      <div className="member-info">
                        <span className="member-name">{member.name}</span>
                        <span className="member-id">({member.id})</span>
                      </div>
                    </td>
                    <td>{member.nationality}</td>
                    <td>{member.rank}</td>
                    <td>{member.vessel}</td>
                    <td>
                      <div className="status-actions">
                        <span className={`status-badge ${member.status.toLowerCase().replace(/ /g, '-')}`}>
                          {member.status}
                        </span>
                        <div className="action-buttons">
                          <button className="action-btn edit-btn" title="Edit">
                            ✏️
                          </button>
                          <button className="action-btn delete-btn" title="Delete">
                            🗑️
                          </button>
                          <button className="action-btn view-btn" title="View">
                            👁️
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>

          <div className="crew-sidebar">
            <div className="crew-profile-section">
              <h3>Select a crew member to view their profile</h3>
              <div className="profile-placeholder">
                <div className="placeholder-avatar">👤</div>
                <p>No crew member selected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SeafarerModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Crew;
