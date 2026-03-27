import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import '../../styles/components/SeafarerModal.css';

const SeafarerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    crewIdNumber: '',
    rank: '',
    nationality: '',
    dateOfBirth: '',
    employmentStatus: '',
    contactPhone: '',
    contactEmail: '',
    currentVessel: '',
    notes: ''
  });

  const [debouncedFormData, setDebouncedFormData] = useState(formData);
  const debounceTimerRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedFormData(formData);
    }, 150);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handlePhotoChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleRemovePhoto = useCallback(() => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, photo });
    // Handle form submission here
    onClose(); // Close modal after submission
  }, [formData, photo, onClose]);

  const memoizedFormSections = useMemo(() => ({
    personalDetails: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      nationality: formData.nationality,
      rank: formData.rank
    },
    birthInfo: {
      birthday: formData.birthday,
      placeOfBirth: formData.placeOfBirth,
      sex: formData.sex,
      maritalStatus: formData.maritalStatus
    },
    physicalAttributes: {
      hairColor: formData.hairColor,
      eyeColor: formData.eyeColor,
      height: formData.height,
      weight: formData.weight,
      shoeSize: formData.shoeSize,
      overallSize: formData.overallSize
    },
    professionalInfo: {
      englishProficiency: formData.englishProficiency,
      creditorNo: formData.creditorNo,
      agency: formData.agency,
      availableFrom: formData.availableFrom,
      status: formData.status,
      fleet: formData.fleet
    },
    loginCredentials: {
      loginDomain: formData.loginDomain,
      loginEmail: formData.loginEmail
    },
    additionalInfo: {
      remark: formData.remark
    }
  }), [formData]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Seafarer</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="seafarer-form-modal">
            <div className="form-grid-modal">
              {/* Basic Information */}
              <div className="form-section-modal">
                <h4>Basic Information</h4>
                <div className="form-row-modal">
                  <div className="form-group-modal">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group-modal">
                    <label>Crew ID Number *</label>
                    <input
                      type="text"
                      name="crewIdNumber"
                      value={formData.crewIdNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter crew ID"
                    />
                  </div>
                </div>
                <div className="form-row-modal">
                  <div className="form-group-modal">
                    <label>Rank *</label>
                    <select
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
                      <option value="Deck Officer">Deck Officer</option>
                    </select>
                  </div>
                  <div className="form-group-modal">
                    <label>Nationality *</label>
                    <select
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
                      <option value="Spanish">Spanish</option>
                      <option value="Egyptian">Egyptian</option>
                    </select>
                  </div>
                </div>
                <div className="form-row-modal">
                  <div className="form-group-modal">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group-modal">
                    <label>Employment Status *</label>
                    <select
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="ON BOARD">ON BOARD</option>
                      <option value="ON LEAVE">ON LEAVE</option>
                      <option value="AVAILABLE">AVAILABLE</option>
                      <option value="UNAVAILABLE">UNAVAILABLE</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-section-modal">
                <h4>Contact Information</h4>
                <div className="form-row-modal">
                  <div className="form-group-modal">
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
                  <div className="form-group-modal">
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
                <div className="form-row-modal">
                  <div className="form-group-modal">
                    <label>Current Vessel *</label>
                    <select
                      name="currentVessel"
                      value={formData.currentVessel}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Vessel</option>
                      <option value="MV Neptune">MV Neptune</option>
                      <option value="MV Poseidon">MV Poseidon</option>
                      <option value="MV Atlantic">MV Atlantic</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-section-modal full-width">
                <h4>Additional Information</h4>
                <div className="form-row-modal">
                  <div className="form-group-modal full-width">
                    <label>Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Enter any additional notes..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button type="button" className="btn-cancel-modal" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-submit-modal">
                ✓ Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeafarerModal;
