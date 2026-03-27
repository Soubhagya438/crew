import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import { mockDashboard } from '../data/mockData';
import '../styles/pages/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('planned');

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await mockDashboard.getStats();
        setStats(data);
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadStats();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        {/* Operations Header */}
        <div className="operations-header">
          <div className="operations-title">
            <h1>Operations Dashboard</h1>
            <p>Monitor and manage your fleet operations</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="status-cards">
          <div className="status-card">
            <div className="status-icon onboard">⚓</div>
            <div className="status-content">
              <h3>{stats?.totalCrew || 156}</h3>
              <p>Total Crew</p>
              <span className="status-desc">Currently sailing</span>
            </div>
          </div>
          <div className="status-card">
            <div className="status-icon leave">🏖️</div>
            <div className="status-content">
              <h3>{stats?.activeVessels || 12}</h3>
              <p>Active Vessels</p>
              <span className="status-desc">Currently sailing</span>
            </div>
          </div>
          <div className="status-card">
            <div className="status-icon available">✅</div>
            <div className="status-content">
              <h3>{stats?.pendingAssignments || 7}</h3>
              <p>Pending Assignments</p>
              <span className="status-desc">Scheduled</span>
            </div>
          </div>
          <div className="status-card">
            <div className="status-icon planned">📋</div>
            <div className="status-content">
              <h3>{stats?.totalDocuments || 1426}</h3>
              <p>Total Documents</p>
              <span className="status-desc">Document management</span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="dashboard-grid">
          {/* Voyage Status Overview */}
          <div className="card voyage-status">
            <div className="card-header">
              <h2>Voyage Status Overview</h2>
            </div>
            <div className="voyage-tabs">
              <button 
                className={`tab ${activeTab === 'planned' ? 'active' : ''}`}
                onClick={() => setActiveTab('planned')}
              >
                Planned
              </button>
              <button 
                className={`tab ${activeTab === 'ongoing' ? 'active' : ''}`}
                onClick={() => setActiveTab('ongoing')}
              >
                Ongoing
              </button>
              <button 
                className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
              <button 
                className={`tab ${activeTab === 'cancelled' ? 'active' : ''}`}
                onClick={() => setActiveTab('cancelled')}
              >
                Cancelled
              </button>
            </div>
            <div className="voyage-summary">
              <div className="summary-item">
                <span className="label">Total Voyages:</span>
                <span className="value">24</span>
              </div>
              <div className="summary-item">
                <span className="label">Active:</span>
                <span className="value">8</span>
              </div>
            </div>
            <div className="voyage-table">
              <div className="table-header">
                <div>Vessel</div>
                <div>Voyage</div>
                <div>Dates</div>
                <div>Fill Rate</div>
              </div>
              <div className="table-row">
                <div>MT Ocean Pride</div>
                <div>VOY-2024-001</div>
                <div>Jan 15 - Feb 20</div>
                <div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '85%'}}></div>
                  </div>
                  <span>85%</span>
                </div>
              </div>
              <div className="table-row">
                <div>MT Sea Explorer</div>
                <div>VOY-2024-002</div>
                <div>Jan 20 - Mar 10</div>
                <div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '92%'}}></div>
                  </div>
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document Health */}
          <div className="card document-health">
            <div className="card-header">
              <h2>Document Health</h2>
            </div>
            <div className="doc-summary">
              <div className="doc-stat valid">
                <div className="doc-number">342</div>
                <div className="doc-label">Valid</div>
              </div>
              <div className="doc-stat expiring">
                <div className="doc-number">28</div>
                <div className="doc-label">Expiring</div>
              </div>
              <div className="doc-stat expired">
                <div className="doc-number">5</div>
                <div className="doc-label">Expired</div>
              </div>
            </div>
            <div className="expiring-docs">
              <h3>Top Expiring Documents</h3>
              <div className="doc-item">
                <div className="doc-info">
                  <span className="doc-name">John Smith</span>
                  <span className="doc-type">Medical Certificate</span>
                </div>
                <span className="doc-expiry expired">Expired</span>
              </div>
              <div className="doc-item">
                <div className="doc-info">
                  <span className="doc-name">Sarah Johnson</span>
                  <span className="doc-type">STCW Certificate</span>
                </div>
                <span className="doc-expiry expired">Expired</span>
              </div>
            </div>
          </div>

          {/* Vessel Overview */}
          <div className="card vessel-overview">
            <div className="card-header">
              <h2>Vessel Overview</h2>
            </div>
            <div className="vessel-list">
              <div className="vessel-item">
                <span className="vessel-name">MT Ocean Pride</span>
                <span className="vessel-status ongoing">Ongoing</span>
              </div>
              <div className="vessel-item">
                <span className="vessel-name">MT Sea Explorer</span>
                <span className="vessel-status ongoing">Ongoing</span>
              </div>
              <div className="vessel-item">
                <span className="vessel-name">MT Atlantic Star</span>
                <span className="vessel-status completed">Completed</span>
              </div>
              <div className="vessel-item">
                <span className="vessel-name">MT Pacific Dream</span>
                <span className="vessel-status completed">Completed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Recently Updated Crew */}
        <div className="recent-crew">
          <div className="card-header">
            <h2>Recently Updated Crew</h2>
          </div>
          <div className="crew-table">
            <div className="table-header">
              <div>Name</div>
              <div>Rank</div>
              <div>Vessel</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className="table-row">
              <div>Michael Chen</div>
              <div>Chief Engineer</div>
              <div>MT Ocean Pride</div>
              <div><span className="status-badge active">Active</span></div>
              <div><button className="action-btn-small">View</button></div>
            </div>
            <div className="table-row">
              <div>David Kumar</div>
              <div>First Mate</div>
              <div>MT Sea Explorer</div>
              <div><span className="status-badge active">Active</span></div>
              <div><button className="action-btn-small">View</button></div>
            </div>
            <div className="table-row">
              <div>Robert Wilson</div>
              <div>Second Engineer</div>
              <div>MT Atlantic Star</div>
              <div><span className="status-badge leave">On Leave</span></div>
              <div><button className="action-btn-small">View</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
