// src/pages/UploadMakanan.jsx
import React, { useState } from 'react';
import '../CSS/style.css'; // Pastikan path CSS ini benar
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor jika diperlukan
import { BiCamera } from 'react-icons/bi'; // Import ikon kamera dari react-icons/bi

export default function UploadMakanan() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('foodPhotoInput').click();
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert(`File siap diupload: ${selectedFile.name}, Ukuran: ${selectedFile.size} bytes`);
      console.log('File yang akan diupload:', selectedFile);
      // Lakukan proses upload ke server di sini

      // Reset form setelah upload
      setSelectedFile(null);
      setPreviewUrl(null);
    } else {
      alert("Pilih foto makanan terlebih dahulu!");
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="main-container"> {/* Main container untuk upload makanan */}
      <div className="form-container upload-form-container">
        <h2 className="form-title">Upload Foto Makanan Anda</h2>

        <div
          className={`photo-upload-box ${previewUrl ? 'has-image' : ''}`}
          onClick={handleUploadClick}
          role="button"
          tabIndex={0}
          aria-label="Pilih foto makanan"
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview Foto Makanan" className="uploaded-image-preview" />
          ) : (
            <div className="placeholder-icon">
              <BiCamera style={{ fontSize: '4rem', color: '#888' }} />
            </div>
          )}
          <input
            type="file"
            id="foodPhotoInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        {/* Ini adalah div yang mengatur tombol "Kirim" dan "Batal" */}
        <div className="upload-buttons-container">
          <button className="btn submit-btn upload-kirim-btn" onClick={handleSubmit}>
            Kirim
          </button>
          <button className="btn btn-danger upload-batal-btn" onClick={handleCancel}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}