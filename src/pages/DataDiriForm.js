import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../CSS/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCamera } from 'react-icons/fa'; 

export default function DataDiriForm() {
  const { userData, setUserData } = useContext(UserContext);

  const [formData, setFormData] = useState({
    nama: userData.nama || '',
    tinggiBadan: userData.tinggiBadan || '',
    usia: userData.usia || '',
    beratBadan: userData.beratBadan || '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
      setProfileImagePreview(null);
    }
  };

  const handleImageUploadClick = () => {
    document.getElementById('profilePhotoInput').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); 

    
    if (profileImage) {
      console.log('Foto profil akan diupload:', profileImage);
      }

    alert('Data Diri berhasil disimpan!');
    console.log('Data Diri Tersimpan:', formData);
  };

  return (
    <div className="main-container">
      <div
        className={`chef-img-container ${profileImagePreview ? 'has-photo' : 'no-photo'}`}
        onClick={handleImageUploadClick}
        role="button"
        tabIndex={0}
        aria-label="Pilih foto profil"
      >
        {profileImagePreview ? (
          <img src={profileImagePreview} alt="Preview Foto Profil" />
        ) : (
          <div className="placeholder">
            <FaCamera style={{ fontSize: '4rem', marginBottom: '10px' }} />
            <p>Upload Foto Profil</p>
          </div>
        )}
        <input
          type="file"
          id="profilePhotoInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfileImageChange}
        />
      </div>

      <div className="form-container"> 
        <h2 className="form-title">Data Diri</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row"> 
            <div className="form-group">
              <label htmlFor="nama">NAMA</label>
              <input
                type="text"
                className="form-control custom-input"
                id="nama"
                name="nama"
                placeholder="Enter your name..."
                value={formData.nama}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tinggiBadan">TINGGI BADAN</label>
              <input
                type="number"
                className="form-control custom-input"
                id="tinggiBadan"
                name="tinggiBadan"
                placeholder="Masukkan tinggi badan anda..."
                value={formData.tinggiBadan}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row"> 
            <div className="form-group">
              <label htmlFor="usia">USIA</label>
              <input
                type="number"
                className="form-control custom-input"
                id="usia"
                name="usia"
                placeholder="Masukkan usia anda..."
                value={formData.usia}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beratBadan">BERAT BADAN</label>
              <input
                type="number"
                className="form-control custom-input"
                id="beratBadan"
                name="beratBadan"
                placeholder="Masukkan berat badan anda..."
                value={formData.beratBadan}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn submit-btn">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}