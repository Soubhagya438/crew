import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import '../styles/pages/Reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterVessel, setFilterVessel] = useState('all');
  const [selectedReports, setSelectedReports] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('table'); // table or cards
  const [showPreview, setShowPreview] = useState(null);

  // Enhanced mock data for reports
  const mockReports = [
    {
      id: 1,
      title: 'Crew Performance Report - Q1 2024',
      type: 'Crew Reports',
      generatedBy: 'Capt. John Smith',
      generatedDate: '2024-03-15',
      vessel: 'MV Neptune',
      status: 'Completed',
      size: '2.4 MB',
      category: 'Performance',
      priority: 'High',
      downloads: 15,
      views: 42,
      description: 'Comprehensive analysis of crew performance metrics including efficiency, training completion, and operational readiness.',
      tags: ['Performance', 'Q1 2024', 'Crew'],
      expires: '2024-06-15'
    },
    {
      id: 2,
      title: 'Vessel Maintenance Report',
      type: 'Vessel Reports',
      generatedBy: 'Eng. Sarah Johnson',
      generatedDate: '2024-03-14',
      vessel: 'Atlantic Star',
      status: 'Completed',
      size: '1.8 MB',
      category: 'Maintenance',
      priority: 'Medium',
      downloads: 8,
      views: 23,
      description: 'Detailed maintenance schedule and repair logs for Atlantic Star vessel systems.',
      tags: ['Maintenance', 'Atlantic Star'],
      expires: '2024-09-14'
    },
    {
      id: 3,
      title: 'Certificate Expiry Report',
      type: 'Document Reports',
      generatedBy: 'Admin',
      generatedDate: '2024-03-13',
      vessel: 'All Vessels',
      status: 'Completed',
      size: '856 KB',
      category: 'Compliance',
      priority: 'High',
      downloads: 23,
      views: 67,
      description: 'Overview of all certificate expirations across the fleet with priority alerts.',
      tags: ['Certificates', 'Compliance', 'Expiry'],
      expires: '2024-04-13'
    },
    {
      id: 4,
      title: 'Safety Incident Report',
      type: 'Safety Reports',
      generatedBy: 'Safety Officer',
      generatedDate: '2024-03-12',
      vessel: 'MV Poseidon',
      status: 'Completed',
      size: '1.2 MB',
      category: 'Safety',
      priority: 'Critical',
      downloads: 31,
      views: 89,
      description: 'Analysis of safety incidents and preventive measures implemented.',
      tags: ['Safety', 'Incident', 'Analysis'],
      expires: '2024-06-12'
    },
    {
      id: 5,
      title: 'Monthly Crew Roster',
      type: 'Crew Reports',
      generatedBy: 'HR Manager',
      generatedDate: '2024-03-10',
      vessel: 'All Vessels',
      status: 'Processing',
      size: '3.1 MB',
      category: 'Roster',
      priority: 'Medium',
      downloads: 12,
      views: 34,
      description: 'Current month crew assignments and rotation schedules.',
      tags: ['Roster', 'Monthly', 'Crew'],
      expires: '2024-04-10'
    },
    {
      id: 6,
      title: 'Fuel Consumption Analysis',
      type: 'Vessel Reports',
      generatedBy: 'Ops Manager',
      generatedDate: '2024-03-08',
      vessel: 'Pacific Dream',
      status: 'Completed',
      size: '967 KB',
      category: 'Operational',
      priority: 'Low',
      downloads: 6,
      views: 18,
      description: 'Fuel efficiency analysis and consumption trends across fleet vessels.',
      tags: ['Fuel', 'Efficiency', 'Analysis'],
      expires: '2024-09-08'
    },
    {
      id: 7,
      title: 'Training Completion Report',
      type: 'Crew Reports',
      generatedBy: 'Training Manager',
      generatedDate: '2024-03-05',
      vessel: 'All Vessels',
      status: 'Completed',
      size: '2.1 MB',
      category: 'Training',
      priority: 'Medium',
      downloads: 18,
      views: 45,
      description: 'Comprehensive training completion status for all crew members.',
      tags: ['Training', 'Completion', 'Skills'],
      expires: '2024-06-05'
    },
    {
      id: 8,
      title: 'Port Call Analysis',
      type: 'Vessel Reports',
      generatedBy: 'Port Captain',
      generatedDate: '2024-03-03',
      vessel: 'MV Neptune',
      status: 'Completed',
      size: '1.5 MB',
      category: 'Operations',
      priority: 'Medium',
      downloads: 9,
      views: 27,
      description: 'Analysis of port call efficiency and turnaround times.',
      tags: ['Port', 'Operations', 'Efficiency'],
      expires: '2024-09-03'
    }
  ];

  useEffect(() => {
    setReports(mockReports);
  }, []);

  // Enhanced filtering and sorting
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.generatedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.vessel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || report.type === filterType;
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesVessel = filterVessel === 'all' || report.vessel === filterVessel;
    
    return matchesSearch && matchesType && matchesStatus && matchesVessel;
  }).sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === 'date') {
      aValue = new Date(a.generatedDate);
      bValue = new Date(b.generatedDate);
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleDownload = (reportId) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? { ...report, downloads: report.downloads + 1 }
        : report
    ));
    console.log('Downloading report:', reportId);
  };

  const handleView = (reportId) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? { ...report, views: report.views + 1 }
        : report
    ));
    setShowPreview(reportId);
  };

  const handleDelete = (reportId) => {
    setReports(reports.filter(r => r.id !== reportId));
    setSelectedReports(selectedReports.filter(id => id !== reportId));
  };

  const handleSelectReport = (reportId) => {
    if (selectedReports.includes(reportId)) {
      setSelectedReports(selectedReports.filter(id => id !== reportId));
    } else {
      setSelectedReports([...selectedReports, reportId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedReports.length === filteredReports.length) {
      setSelectedReports([]);
    } else {
      setSelectedReports(filteredReports.map(r => r.id));
    }
  };

  const handleBulkDownload = () => {
    selectedReports.forEach(id => handleDownload(id));
    setSelectedReports([]);
  };

  const handleBulkDelete = () => {
    setReports(reports.filter(r => !selectedReports.includes(r.id)));
    setSelectedReports([]);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setFilterStatus('all');
    setFilterVessel('all');
  };

  const reportTypes = ['all', 'Crew Reports', 'Vessel Reports', 'Document Reports', 'Safety Reports'];
  const statuses = ['all', 'Completed', 'Processing', 'Pending', 'Draft'];
  const vessels = ['all', 'All Vessels', 'MV Neptune', 'Atlantic Star', 'MV Poseidon', 'Pacific Dream'];
  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'title', label: 'Title' },
    { value: 'downloads', label: 'Downloads' },
    { value: 'views', label: 'Views' },
    { value: 'size', label: 'Size' }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return '#dc3545';
      case 'High': return '#fd7e14';
      case 'Medium': return '#ffc107';
      case 'Low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const reportPreview = showPreview ? reports.find(r => r.id === showPreview) : null;

  return (
    <div className="reports">
      <Navbar />
      <div className="reports-content">
        <div className="reports-header">
          <h1>Reports</h1>
          <div className="header-actions">
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
              >
                📊 Table
              </button>
              <button 
                className={`view-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
              >
                📋 Cards
              </button>
            </div>
            <button className="btn btn-primary">Generate New Report</button>
          </div>
        </div>

        {/* Enhanced Filters Bar */}
        <div className="filters-bar">
          <div className="filters-row">
            <div className="filter-group">
              <input
                type="text"
                className="search-input"
                placeholder="Search reports, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <select
                className="filter-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {reportTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                className="filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : status}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                className="filter-select"
                value={filterVessel}
                onChange={(e) => setFilterVessel(e.target.value)}
              >
                {vessels.map(vessel => (
                  <option key={vessel} value={vessel}>
                    {vessel}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <select
                className="filter-select"
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [sort, order] = e.target.value.split('-');
                  setSortBy(sort);
                  setSortOrder(order);
                }}
              >
                {sortOptions.map(option => (
                  <option key={`${option.value}-desc`} value={`${option.value}-desc`}>
                    {option.label} (Newest)
                  </option>
                ))}
                {sortOptions.map(option => (
                  <option key={`${option.value}-asc`} value={`${option.value}-asc`}>
                    {option.label} (Oldest)
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-secondary clear-btn" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>

          <div className="filter-results">
            <span className="results-count">
              Showing {filteredReports.length} of {reports.length} reports
            </span>
            {selectedReports.length > 0 && (
              <div className="bulk-actions">
                <span>{selectedReports.length} selected</span>
                <button className="btn btn-sm btn-primary" onClick={handleBulkDownload}>
                  ⬇️ Download All
                </button>
                <button className="btn btn-sm btn-danger" onClick={handleBulkDelete}>
                  🗑️ Delete All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Actions Bar */}
        {selectedReports.length > 0 && (
          <div className="bulk-actions-bar">
            <div className="bulk-info">
              <input
                type="checkbox"
                checked={selectedReports.length === filteredReports.length}
                onChange={handleSelectAll}
              />
              <span>{selectedReports.length} reports selected</span>
            </div>
            <div className="bulk-buttons">
              <button className="btn btn-sm btn-primary" onClick={handleBulkDownload}>
                ⬇️ Download Selected
              </button>
              <button className="btn btn-sm btn-secondary" onClick={() => setSelectedReports([])}>
                ✖️ Clear Selection
              </button>
              <button className="btn btn-sm btn-danger" onClick={handleBulkDelete}>
                🗑️ Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Reports Display */}
        {viewMode === 'table' ? (
          <div className="simple-table-container">
            <table className="simple-table enhanced-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedReports.length === filteredReports.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Generated By</th>
                  <th>Date</th>
                  <th>Vessel</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Downloads</th>
                  <th>Views</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map(report => (
                  <tr key={report.id} className={selectedReports.includes(report.id) ? 'selected' : ''}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedReports.includes(report.id)}
                        onChange={() => handleSelectReport(report.id)}
                      />
                    </td>
                    <td className="title-cell">
                      <div className="report-title">
                        <span className="document-icon"></span>
                        <div>
                          <div className="title">{report.title}</div>
                          <div className="tags">{report.tags.join(', ')}</div>
                        </div>
                      </div>
                    </td>
                    <td>{report.type}</td>
                    <td>{report.generatedBy}</td>
                    <td>{report.generatedDate}</td>
                    <td>{report.vessel}</td>
                    <td>
                      <span className={`status-badge ${report.status.toLowerCase()}`}>
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <span className="priority-badge" style={{ backgroundColor: getPriorityColor(report.priority) }}>
                        {report.priority}
                      </span>
                    </td>
                    <td>{report.downloads}</td>
                    <td>{report.views}</td>
                    <td>{report.size}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn"
                          onClick={() => handleView(report.id)}
                          title="View"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn"
                          onClick={() => handleDownload(report.id)}
                          title="Download"
                        >
                          ⬇️
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(report.id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="reports-cards-container">
            <div className="cards-grid">
              {filteredReports.map(report => (
                <div key={report.id} className={`report-card ${selectedReports.includes(report.id) ? 'selected' : ''}`}>
                  <div className="card-header">
                    <div className="card-icon">📕</div>
                    <div className="card-priority" style={{ backgroundColor: getPriorityColor(report.priority) }}>
                      {report.priority}
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedReports.includes(report.id)}
                      onChange={() => handleSelectReport(report.id)}
                      className="card-checkbox"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{report.title}</h3>
                    <p className="card-description">{report.description}</p>
                    <div className="card-meta">
                      <div className="meta-item">
                        <span className="meta-label">Type:</span>
                        <span className="meta-value">{report.type}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Vessel:</span>
                        <span className="meta-value">{report.vessel}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Generated:</span>
                        <span className="meta-value">{report.generatedDate}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Size:</span>
                        <span className="meta-value">{report.size}</span>
                      </div>
                    </div>
                    <div className="card-tags">
                      {report.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="card-stats">
                      <span className="stat">👁️ {report.views}</span>
                      <span className="stat">⬇️ {report.downloads}</span>
                    </div>
                    <div className="card-actions">
                      <button className="action-btn" onClick={() => handleView(report.id)} title="View">👁️</button>
                      <button className="action-btn" onClick={() => handleDownload(report.id)} title="Download">⬇️</button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(report.id)} title="Delete">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Report Preview Modal */}
        {reportPreview && (
          <div className="preview-modal" onClick={() => setShowPreview(null)}>
            <div className="preview-content" onClick={(e) => e.stopPropagation()}>
              <div className="preview-header">
                <h2>{reportPreview.title}</h2>
                <button className="close-btn" onClick={() => setShowPreview(null)}>✖️</button>
              </div>
              <div className="preview-body">
                <div className="preview-meta">
                  <div className="meta-row">
                    <span className="meta-label">Type:</span>
                    <span>{reportPreview.type}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Generated By:</span>
                    <span>{reportPreview.generatedBy}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Date:</span>
                    <span>{reportPreview.generatedDate}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Vessel:</span>
                    <span>{reportPreview.vessel}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Size:</span>
                    <span>{reportPreview.size}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Priority:</span>
                    <span className="priority-badge" style={{ backgroundColor: getPriorityColor(reportPreview.priority) }}>
                      {reportPreview.priority}
                    </span>
                  </div>
                </div>
                <div className="preview-description">
                  <h3>Description</h3>
                  <p>{reportPreview.description}</p>
                </div>
                <div className="preview-tags">
                  <h3>Tags</h3>
                  <div className="tags-list">
                    {reportPreview.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="preview-stats">
                  <div className="stat-item">
                    <span className="stat-number">{reportPreview.views}</span>
                    <span className="stat-label">Views</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{reportPreview.downloads}</span>
                    <span className="stat-label">Downloads</span>
                  </div>
                </div>
              </div>
              <div className="preview-footer">
                <button className="btn btn-primary" onClick={() => handleDownload(reportPreview.id)}>
                  ⬇️ Download Report
                </button>
                <button className="btn btn-secondary" onClick={() => setShowPreview(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
