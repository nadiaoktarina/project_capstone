import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../CSS/FormPersonality.css";

export default function FormPersonality() {
  const { isLoggedIn, userData, updateUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    usia: "",
    tinggiBadan: "",
    beratBadan: "",
    fotoProfil: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, fotoProfil: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    updateUserData(formData);
    alert("Data dikirim. Menuju Dashboard...");
    navigate("/sidebar");
  };

  // ✅ Jika ingin mewajibkan login, aktifkan ini:
  // if (!isLoggedIn) return <p className="text-center mt-5">Silakan login terlebih dahulu.</p>;

  return (
    <div className="form-container-flex">
      <div className="image-section">
        <div
          className="photo-box"
          onClick={handleBoxClick}
          style={{ cursor: "pointer" }}
          title="Klik untuk upload foto"
        >
          {formData.fotoProfil ? (
            <img
              src={formData.fotoProfil}
              alt="Foto Profil"
              className="photo-preview"
            />
          ) : (
            <div className="photo-placeholder">Upload Foto</div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      <div className="form-section">
        <h1 className="form-title">Data Diri</h1>
        <div className="form-grid">
          <div className="form-group">
            <label>NAMA</label>
            <input
              name="nama"
              placeholder="Enter your name..."
              value={formData.nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>TINGGI BADAN</label>
            <input
              name="tinggiBadan"
              placeholder="Masukkan tinggi badan anda..."
              value={formData.tinggiBadan}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>USIA</label>
            <input
              name="usia"
              placeholder="Masukkan usia anda..."
              value={formData.usia}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>BERAT BADAN</label>
            <input
              name="beratBadan"
              placeholder="Masukkan berat badan anda..."
              value={formData.beratBadan}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Kirim
        </button>
      </div>
    </div>
  );
}
