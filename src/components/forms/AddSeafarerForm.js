import React, { useState } from 'react';
import '../../styles/components/AddSeafarerForm.css';

const AddSeafarerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    rank: '',
    birthday: '',
    placeOfBirth: '',
    sex: '',
    maritalStatus: '',
    englishProficiency: '',
    creditorNo: '',
    hairColor: '',
    eyeColor: '',
    height: '',
    weight: '',
    shoeSize: '',
    overallSize: '',
    agency: '',
    availableFrom: '',
    status: '',
    loginDomain: '',
    loginEmail: '',
    fleet: '',
    remark: ''
  });

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, photo });
    // Handle form submission here
  };

  return (
    <div className="add-seafarer-container">
      <div className="form-header">
        <h2>Add Seafarer</h2>
        <p>Complete the form below to add a new seafarer to the system</p>
      </div>
      
      <form onSubmit={handleSubmit} className="seafarer-form">
        {/* Photo Upload Section */}
        <div className="photo-section">
          <div className="photo-upload-container">
            <div className="photo-preview">
              {photoPreview ? (
                <div className="photo-preview-wrapper">
                  <img src={photoPreview} alt="Seafarer" className="preview-image" />
                  <button type="button" className="remove-photo-btn" onClick={handleRemovePhoto}>
                    ✕
                  </button>
                </div>
              ) : (
                <div className="photo-placeholder">
                  <div className="placeholder-icon">👤</div>
                  <p>No photo uploaded</p>
                </div>
              )}
            </div>
            <div className="photo-upload-controls">
              <input
                ref={fileInputRef}
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="photo-input"
              />
              <label htmlFor="photo" className="photo-upload-btn">
                <span className="upload-icon">📷</span>
                Upload Photo
              </label>
              <p className="photo-hint">
                Upload a clear, recent photo (JPG, PNG - Max 5MB)
              </p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>👤 Personal Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter last name"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nationality">Nationality *</label>
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">Select Nationality</option>
                <option value="Filipino">Filipino</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Greek">Greek</option>
                <option value="Polish">Polish</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rank">Rank *</label>
              <select
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
              >
                <option value="">Select Rank</option>
                <option value="Captain">Captain</option>
                <option value="Chief Engineer">Chief Engineer</option>
                <option value="First Mate">First Mate</option>
                <option value="Second Engineer">Second Engineer</option>
                <option value="Chief Officer">Chief Officer</option>
                <option value="Second Mate">Second Mate</option>
                <option value="Third Engineer">Third Engineer</option>
                <option value="Bosun">Bosun</option>
                <option value="Able Seaman">Able Seaman</option>
                <option value="Ordinary Seaman">Ordinary Seaman</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>🎂 Birth Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="birthday">Birthday *</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="placeOfBirth">Place of Birth *</label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
                placeholder="Enter place of birth"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sex">Sex *</label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="maritalStatus">Marital Status *</label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>🏃 Physical Attributes</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="hairColor">Hair Color</label>
              <input
                type="text"
                id="hairColor"
                name="hairColor"
                value={formData.hairColor}
                onChange={handleChange}
                placeholder="e.g., Black, Brown, Blonde"
              />
            </div>
            <div className="form-group">
              <label htmlFor="eyeColor">Eye Color</label>
              <input
                type="text"
                id="eyeColor"
                name="eyeColor"
                value={formData.eyeColor}
                onChange={handleChange}
                placeholder="e.g., Brown, Blue, Green"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="e.g., 175"
                min="140"
                max="220"
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="e.g., 70"
                min="40"
                max="150"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="shoeSize">Shoe Size</label>
              <input
                type="text"
                id="shoeSize"
                name="shoeSize"
                value={formData.shoeSize}
                onChange={handleChange}
                placeholder="e.g., 42, 43, 44"
              />
            </div>
            <div className="form-group">
              <label htmlFor="overallSize">Overall Size</label>
              <input
                type="text"
                id="overallSize"
                name="overallSize"
                value={formData.overallSize}
                onChange={handleChange}
                placeholder="e.g., M, L, XL"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>💼 Professional Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="englishProficiency">English Proficiency</label>
              <select
                id="englishProficiency"
                name="englishProficiency"
                value={formData.englishProficiency}
                onChange={handleChange}
              >
                <option value="">Select Level</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="creditorNo">Creditor No.</label>
              <input
                type="text"
                id="creditorNo"
                name="creditorNo"
                value={formData.creditorNo}
                onChange={handleChange}
                placeholder="Enter creditor number"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="agency">Agency</label>
              <input
                type="text"
                id="agency"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                placeholder="Enter agency name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="availableFrom">Available From</label>
              <input
                type="date"
                id="availableFrom"
                name="availableFrom"
                value={formData.availableFrom}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Available">Available</option>
                <option value="On Board">On Board</option>
                <option value="On Leave">On Leave</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Under Training">Under Training</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="fleet">Fleet</label>
              <input
                type="text"
                id="fleet"
                name="fleet"
                value={formData.fleet}
                onChange={handleChange}
                placeholder="Enter fleet name"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>🔐 Login Credentials</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="loginDomain">Login (Domain)</label>
              <input
                type="text"
                id="loginDomain"
                name="loginDomain"
                value={formData.loginDomain}
                onChange={handleChange}
                placeholder="e.g., CREWBRIDGE"
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginEmail">Login (Email)</label>
              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                value={formData.loginEmail}
                onChange={handleChange}
                placeholder="seafarer@company.com"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>📝 Additional Information</h3>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="remark">Remark</label>
              <textarea
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                placeholder="Enter any additional notes or remarks..."
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel">
            <span className="btn-icon">✕</span>
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            <span className="btn-icon">✓</span>
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSeafarerForm;
