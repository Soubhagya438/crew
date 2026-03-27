import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import '../styles/pages/Documents.css';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadData, setUploadData] = useState({
    documentTitle: '',
    documentType: '',
    category: '',
    vessel: '',
    expiryDate: '',
    description: '',
    tags: '',
    file: null,
    notifyExpiry: false,
    makePublic: false
  });

  const documents = [
    {
      id: 1,
      name: 'Crew Contract Template',
      category: 'Contracts',
      type: 'Template',
      uploadDate: '2024-03-15',
      size: '245 KB',
      uploadedBy: 'Admin',
      description: 'Standard crew contract template for maritime employment'
    },
    {
      id: 2,
      name: 'Vessel Registration Certificate',
      category: 'Certificates',
      type: 'Certificate',
      uploadDate: '2024-03-14',
      size: '1.2 MB',
      uploadedBy: 'John Smith',
      description: 'LNG Zenith Tide vessel registration and certification documents'
    },
    {
      id: 3,
      name: 'Safety Manual 2024',
      category: 'Manuals',
      type: 'Manual',
      uploadDate: '2024-03-13',
      size: '5.8 MB',
      uploadedBy: 'Maria Garcia',
      description: 'Updated safety procedures and emergency protocols'
    },
    {
      id: 4,
      name: 'Medical Examination Report',
      category: 'Medical',
      type: 'Report',
      uploadDate: '2024-03-12',
      size: '890 KB',
      uploadedBy: 'Robert Johnson',
      description: 'Annual medical examination results for crew members'
    },
    {
      id: 5,
      name: 'Training Records',
      category: 'Training',
      type: 'Record',
      uploadDate: '2024-03-11',
      size: '2.1 MB',
      uploadedBy: 'Sarah Williams',
      description: 'Crew training completion certificates and records'
    },
    {
      id: 6,
      name: 'Insurance Policy Document',
      category: 'Insurance',
      type: 'Policy',
      uploadDate: '2024-03-10',
      size: '3.4 MB',
      uploadedBy: 'David Lee',
      description: 'Maritime insurance coverage and policy details'
    },
    {
      id: 7,
      name: 'Port Clearance Papers',
      category: 'Legal',
      type: 'Clearance',
      uploadDate: '2024-03-09',
      size: '1.5 MB',
      uploadedBy: 'Admin',
      description: 'Port authority clearance documentation for all vessels'
    }
  ];

  const documentTypes = ['Certificate', 'Contract', 'Manual', 'Report', 'Template', 'Policy', 'Record', 'Clearance'];
  const categories = ['Contracts', 'Certificates', 'Manuals', 'Medical', 'Training', 'Insurance', 'Legal', 'Safety'];
  const vessels = ['MV Neptune', 'Atlantic Star', 'MV Poseidon', 'Pacific Dream', 'LNG Zenith Tide', 'All Vessels'];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || doc.category === selectedCategory;
    const matchesType = !selectedType || doc.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleUploadChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setUploadData(prev => ({
        ...prev,
        file: files[0] || null
      }));
    } else {
      setUploadData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!uploadData.documentTitle || !uploadData.documentType || !uploadData.category || !uploadData.file) {
      alert('Please fill in all required fields and select a file');
      return;
    }
    
    // File validation
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (uploadData.file.size > maxSize) {
      alert('File size exceeds 10MB limit');
      return;
    }
    
    console.log('Uploading document:', uploadData);
    alert('Document uploaded successfully!');
    setShowUploadModal(false);
    
    // Reset form
    setUploadData({
      documentTitle: '',
      documentType: '',
      category: '',
      vessel: '',
      expiryDate: '',
      description: '',
      tags: '',
      file: null,
      notifyExpiry: false,
      makePublic: false
    });
  };

  const handleUploadCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      setShowUploadModal(false);
      setUploadData({
        documentTitle: '',
        documentType: '',
        category: '',
        vessel: '',
        expiryDate: '',
        description: '',
        tags: '',
        file: null,
        notifyExpiry: false,
        makePublic: false
      });
    }
  };

  const handleView = (doc) => {
    console.log('Viewing document:', doc);
  };

  const handleDownload = (doc) => {
    console.log('Downloading document:', doc);
  };

  const handleDelete = (doc) => {
    console.log('Deleting document:', doc);
  };

  return (
    <div className="documents">
      <Navbar />
      <div className="documents-content">
        <div className="documents-header">
          <h1>Documents</h1>
          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => setShowUploadModal(true)}>
              Upload Document
            </button>
          </div>
        </div>

        <div className="documents-main">
          <div className="documents-sidebar">
            <div className="search-section">
              <div className="search-input-wrapper">
                <span className="search-icon"></span>
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-group">
                <label className="filter-label">CATEGORY</label>
                <div className="select-wrapper">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">TYPE</label>
                <div className="select-wrapper">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Types</option>
                    {documentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h3>Document Statistics</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">{documents.length}</span>
                  <span className="stat-label">Total Documents</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">{documents.filter(d => d.category === 'Certificates').length}</span>
                  <span className="stat-label">Certificates</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">{documents.filter(d => d.category === 'Contracts').length}</span>
                  <span className="stat-label">Contracts</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">{documents.filter(d => new Date(d.uploadDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}</span>
                  <span className="stat-label">This Week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="documents-content-right">
            <div className="horizontal-cards">
              <div className="horizontal-card">
                <div className="horizontal-icon">📊</div>
                <div className="horizontal-content">
                  <h4>Total Documents</h4>
                  <p className="horizontal-number">{documents.length}</p>
                </div>
              </div>
              <div className="horizontal-card">
                <div className="horizontal-icon">👥</div>
                <div className="horizontal-content">
                  <h4>Active Crew</h4>
                  <p className="horizontal-number">{documents.filter(d => d.category === 'Certificates').length}</p>
                </div>
              </div>
              <div className="horizontal-card">
                <div className="horizontal-icon">📈</div>
                <div className="horizontal-content">
                  <h4>Completion Rate</h4>
                  <p className="horizontal-number">85%</p>
                </div>
              </div>
              <div className="horizontal-card">
                <div className="horizontal-icon">⏰</div>
                <div className="horizontal-content">
                  <h4>Pending</h4>
                  <p className="horizontal-number">{documents.filter(d => new Date(d.uploadDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}</p>
                </div>
              </div>
            </div>

            <div className="documents-table-container">
              <table className="documents-table">
                <thead>
                  <tr>
                    <th>Document Name</th>
                    <th>Category</th>
                    <th>Upload Date</th>
                    <th>Size</th>
                    <th>Uploaded By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocuments.map(doc => (
                    <tr key={doc.id}>
                      <td>
                        <div className="document-info">
                          <span className="document-icon">📕</span>
                          <span className="document-name">{doc.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`category-badge ${doc.category.toLowerCase()}`}>
                          {doc.category}
                        </span>
                      </td>
                      <td>{doc.uploadDate}</td>
                      <td>{doc.size}</td>
                      <td>{doc.uploadedBy}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn view-btn" onClick={() => handleView(doc)} title="View">👁️</button>
                          <button className="action-btn download-btn" onClick={() => handleDownload(doc)} title="Download">⬇️</button>
                          <button className="action-btn delete-btn" onClick={() => handleDelete(doc)} title="Delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={handleUploadCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Upload Document</h2>
              <button className="close-btn" onClick={handleUploadCancel}>✖️</button>
            </div>

            <form className="upload-form" onSubmit={handleUploadSubmit}>
              <div className="form-grid">
                {/* Left Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="documentTitle">Document Title *</label>
                    <input
                      type="text"
                      id="documentTitle"
                      name="documentTitle"
                      value={uploadData.documentTitle}
                      onChange={handleUploadChange}
                      required
                      placeholder="Enter document title"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="documentType">Document Type *</label>
                    <select
                      id="documentType"
                      name="documentType"
                      value={uploadData.documentType}
                      onChange={handleUploadChange}
                      required
                    >
                      <option value="">Select Document Type</option>
                      {documentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={uploadData.category}
                      onChange={handleUploadChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="vessel">Vessel</label>
                    <select
                      id="vessel"
                      name="vessel"
                      value={uploadData.vessel}
                      onChange={handleUploadChange}
                    >
                      <option value="">Select Vessel</option>
                      {vessels.map(vessel => (
                        <option key={vessel} value={vessel}>{vessel}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      value={uploadData.expiryDate}
                      onChange={handleUploadChange}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={uploadData.description}
                      onChange={handleUploadChange}
                      placeholder="Enter document description..."
                      rows={4}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={uploadData.tags}
                      onChange={handleUploadChange}
                      placeholder="Enter tags separated by commas"
                    />
                  </div>

                  <div className="form-group">
                    <label>Document File *</label>
                    <div className="file-upload-area">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleUploadChange}
                        className="file-input"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                        required
                      />
                      <label htmlFor="file" className="file-upload-label">
                        <span className="upload-icon">📁</span>
                        <span>Click to upload or drag and drop</span>
                        <span className="upload-hint">PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX (MAX. 10MB)</span>
                      </label>
                    </div>
                    {uploadData.file && (
                      <div className="selected-file">
                        <span className="file-name">📄 {uploadData.file.name}</span>
                        <span className="file-size">({(uploadData.file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Options</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="notifyExpiry"
                          checked={uploadData.notifyExpiry}
                          onChange={handleUploadChange}
                        />
                        <span className="checkmark"></span>
                        Notify before expiry
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="makePublic"
                          checked={uploadData.makePublic}
                          onChange={handleUploadChange}
                        />
                        <span className="checkmark"></span>
                        Make public document
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={handleUploadCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
