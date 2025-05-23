import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DataDiriForm from './pages/DataDiriForm'; 
import UploadMakanan from './pages/UploadMakanan'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './CSS/AppLayout.css';


const HomePage = () => (
  <div style={{ padding: '40px', fontSize: '24px', fontWeight: 'bold' }}>
    Selamat Datang di Dashboard!
  </div>
);

function App() {
  return (

    <div className="app-layout"> 
      <Sidebar /> 
      <div className="main-content"> 
        <header className="main-header"> 
          <button className="hamburger-icon" aria-label="Toggle Menu">
            <i className="bi bi-list"></i> 
          </button>
          <h1 className="header-title">BetterBite</h1>
        </header>

        <div className="page-content"> 
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/data-diri" element={<DataDiriForm />} /> 
            <Route path="/upload-makanan" element={<UploadMakanan />} /> 
          </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;