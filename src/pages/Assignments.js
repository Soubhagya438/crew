import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import '../styles/pages/Assignments.css';

const Assignments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    assignmentTitle: '',
    assignmentType: '',
    vessel: '',
    crewMember: '',
    startDate: '',
    endDate: '',
    priority: 'Medium',
    status: 'Pending',
    description: '',
    attachments: [],
    notifyCrew: false,
    notifyCaptain: false,
    estimatedHours: '',
    location: '',
    equipment: '',
    supervisor: '',
    department: '',
    budget: '',
    recurring: false,
    recurringInterval: 'weekly'
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
      name: 'Navigation Chart Update',
      category: 'Navigation',
      type: 'Chart',
      uploadDate: '2024-03-11',
      size: '3.2 MB',
      uploadedBy: 'Captain Chen',
      description: 'Latest electronic navigation charts for Pacific route'
    },
    {
      id: 6,
      name: 'Engine Maintenance Log',
      category: 'Maintenance',
      type: 'Log',
      uploadDate: '2024-03-10',
      size: '1.5 MB',
      uploadedBy: 'Chief Engineer Kumar',
      description: 'Monthly engine maintenance and inspection records'
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

  const assignmentTypes = [
    'Crew Assignment',
    'Vessel Assignment',
    'Training Assignment',
    'Maintenance Assignment',
    'Safety Assignment',
    'Administrative Assignment'
  ];

  const vessels = [
    'MV Neptune',
    'Atlantic Star',
    'MV Poseidon',
    'Pacific Dream',
    'LNG Zenith Tide'
  ];

  const crewMembers = [
    'Capt. John Smith',
    'Eng. Sarah Johnson',
    'Chief Officer Mike Wilson',
    '2nd Mate Lisa Chen',
    'Chief Engineer Robert Kumar',
    '2nd Engineer Ahmed Hassan',
    'Bosun Carlos Rodriguez',
    'Able Seaman James Brown'
  ];

  const priorities = ['Low', 'Medium', 'High', 'Critical'];
  const statuses = ['Pending', 'In Progress', 'Completed', 'Cancelled', 'On Hold'];
  const departments = ['Deck', 'Engine', 'Catering', 'Medical', 'Administration', 'Safety'];
  const locations = ['Bridge', 'Engine Room', 'Galley', 'Cargo Hold', 'Deck', 'Cabin', 'All Vessels'];
  const supervisors = ['Capt. John Smith', 'Chief Officer Mike Wilson', 'Chief Engineer Robert Kumar', 'Purser Lisa Chen'];
  const equipmentOptions = ['Navigation Equipment', 'Engine Tools', 'Safety Gear', 'Communication Devices', 'Cleaning Equipment', 'None'];
  const recurringIntervals = ['daily', 'weekly', 'monthly', 'quarterly'];

  const categories = [
    'All Categories',
    'Contracts',
    'Certificates',
    'Manuals',
    'Medical',
    'Navigation',
    'Maintenance',
    'Legal'
  ];

  const types = [
    'All Types',
    'Template',
    'Certificate',
    'Manual',
    'Report',
    'Chart',
    'Log',
    'Clearance'
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All Categories' || doc.category === selectedCategory;
    const matchesType = !selectedType || selectedType === 'All Types' || doc.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.assignmentTitle || !formData.assignmentType || !formData.vessel || !formData.crewMember || !formData.startDate || !formData.endDate) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Date validation
    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      alert('End date must be after start date');
      return;
    }
    
    console.log('New Assignment:', formData);
    // Handle assignment submission here
    setShowModal(false);
    
    // Show success message
    alert('Assignment created successfully!');
    
    // Reset form
    setFormData({
      assignmentTitle: '',
      assignmentType: '',
      vessel: '',
      crewMember: '',
      startDate: '',
      endDate: '',
      priority: 'Medium',
      status: 'Pending',
      description: '',
      attachments: [],
      notifyCrew: false,
      notifyCaptain: false,
      estimatedHours: '',
      location: '',
      equipment: '',
      supervisor: '',
      department: '',
      budget: '',
      recurring: false,
      recurringInterval: 'weekly'
    });
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      setShowModal(false);
      // Reset form
      setFormData({
        assignmentTitle: '',
        assignmentType: '',
        vessel: '',
        crewMember: '',
        startDate: '',
        endDate: '',
        priority: 'Medium',
        status: 'Pending',
        description: '',
        attachments: [],
        notifyCrew: false,
        notifyCaptain: false,
        estimatedHours: '',
        location: '',
        equipment: '',
        supervisor: '',
        department: '',
        budget: '',
        recurring: false,
        recurringInterval: 'weekly'
      });
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // File size validation
    const maxSize = 10 * 1024 * 1024; // 10MB
    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        alert(`File "${file.name}" exceeds the 10MB limit and will not be uploaded.`);
        return false;
      }
      return true;
    });
    
    // File type validation
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const filteredFiles = validFiles.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        alert(`File "${file.name}" is not a supported format. Please use PDF, DOC, DOCX, XLS, or XLSX.`);
        return false;
      }
      return true;
    });
    
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...filteredFiles]
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
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
    <div className="assignments">
      <Navbar />
      <div className="assignments-content">
        <div className="assignments-header">
          <h1>Assignments</h1>
          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Add Assignment
            </button>
          </div>
        </div>

        <div className="assignments-main">
          <div className="assignments-sidebar">
            <div className="search-section">
              <div className="search-input-wrapper">
                <span className="search-icon"></span>
                <input
                  type="text"
                  placeholder="Search assignments..."
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
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h3>Assignment Statistics</h3>
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

          <div className="assignments-table-container">
            <table className="assignments-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Category</th>
                  <th>Type</th>
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
                        <span className="document-icon"></span>
                        <span className="document-name">{doc.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`category-badge ${doc.category.toLowerCase()}`}>
                        {doc.category}
                      </span>
                    </td>
                    <td>
                      <span className={`type-badge ${doc.type.toLowerCase()}`}>
                        {doc.type}
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

      {/* Add Assignment Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Assignment</h2>
              <button className="close-btn" onClick={handleCancel}>✖️</button>
            </div>

            <form className="assignment-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Left Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="assignmentTitle">Assignment Title *</label>
                    <input
                      type="text"
                      id="assignmentTitle"
                      name="assignmentTitle"
                      value={formData.assignmentTitle}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter assignment title"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="assignmentType">Assignment Type *</label>
                    <select
                      id="assignmentType"
                      name="assignmentType"
                      value={formData.assignmentType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Assignment Type</option>
                      {assignmentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="vessel">Vessel *</label>
                    <select
                      id="vessel"
                      name="vessel"
                      value={formData.vessel}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Vessel</option>
                      {vessels.map(vessel => (
                        <option key={vessel} value={vessel}>{vessel}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="crewMember">Crew Member *</label>
                    <select
                      id="crewMember"
                      name="crewMember"
                      value={formData.crewMember}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Crew Member</option>
                      {crewMembers.map(member => (
                        <option key={member} value={member}>{member}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="startDate">Start Date *</label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="endDate">End Date *</label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="priority">Priority</label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                      >
                        {priorities.map(priority => (
                          <option key={priority} value={priority}>{priority}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="supervisor">Supervisor</label>
                      <select
                        id="supervisor"
                        name="supervisor"
                        value={formData.supervisor}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Supervisor</option>
                        {supervisors.map(supervisor => (
                          <option key={supervisor} value={supervisor}>{supervisor}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="estimatedHours">Estimated Hours</label>
                      <input
                        type="number"
                        id="estimatedHours"
                        name="estimatedHours"
                        value={formData.estimatedHours}
                        onChange={handleInputChange}
                        placeholder="e.g., 8"
                        min="1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget ($)</label>
                      <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., 5000"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Enter assignment description and details..."
                      rows={4}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Location</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="equipment">Required Equipment</label>
                    <select
                      id="equipment"
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Equipment</option>
                      {equipmentOptions.map(equipment => (
                        <option key={equipment} value={equipment}>{equipment}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Attachments</label>
                    <div className="file-upload-area">
                      <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        multiple
                        onChange={handleFileUpload}
                        className="file-input"
                        accept=".pdf,.doc,.docx,.xls,.xlsx"
                      />
                      <label htmlFor="attachments" className="file-upload-label">
                        <span className="upload-icon">📁</span>
                        <span>Click to upload or drag and drop</span>
                        <span className="upload-hint">PDF, DOC, DOCX, XLS, XLSX (MAX. 10MB)</span>
                      </label>
                    </div>
                    {formData.attachments.length > 0 && (
                      <div className="attachments-list">
                        {formData.attachments.map((file, index) => (
                          <div key={index} className="attachment-item">
                            <span className="attachment-name">📄 {file.name}</span>
                            <span className="attachment-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            <button
                              type="button"
                              className="remove-attachment"
                              onClick={() => removeAttachment(index)}
                            >
                              ✖️
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <div className="recurring-section">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="recurring"
                          checked={formData.recurring}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        Recurring Assignment
                      </label>
                      {formData.recurring && (
                        <select
                          name="recurringInterval"
                          value={formData.recurringInterval}
                          onChange={handleInputChange}
                          className="recurring-select"
                        >
                          {recurringIntervals.map(interval => (
                            <option key={interval} value={interval}>
                              {interval.charAt(0).toUpperCase() + interval.slice(1)}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Notifications</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="notifyCrew"
                          checked={formData.notifyCrew}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        Notify Crew Member
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="notifyCaptain"
                          checked={formData.notifyCaptain}
                          onChange={handleInputChange}
                        />
                        <span className="checkmark"></span>
                        Notify Captain
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
