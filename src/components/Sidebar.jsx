import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import '../CSS/Sidebar.css'; 
import { FaTh, FaHome, FaUser, FaCameraRetro } from 'react-icons/fa'; 
import { UserContext } from '../context/UserContext';

const Sidebar = () => {
const { userData } = useContext(UserContext);
const [isDashboardOpen, setIsDashboardOpen] = useState(false); 

  const toggleDashboard = () => {
  setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="avatar">
          <Link to="/data-diri">
  <img
    src={userData.fotoProfil || '/Chef.png'}
    alt="Foto Profil"
  />
</Link>

        </div>
        <p className="username">{userData.nama || 'Zulkipli'}</p>
      </div>

    

      <div className="menu-section">
          <div className="submenu-list"> 
    
            <NavLink to="/upload-makanan"className={({ isActive }) => (isActive ? 'submenu-item active' : 'submenu-item')} >

            <FaCameraRetro /> Foto Makanan  </NavLink>

          </div>
      </div>

    </div>
  );
};

export default Sidebar;