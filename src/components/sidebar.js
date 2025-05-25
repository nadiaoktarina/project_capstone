import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, userName = "John Doe", isLoggedIn = true }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "white",
        position: "fixed",
        left: isOpen ? 0 : "-250px",
        top: "60px",
        padding: "20px 0",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        transition: "left 0.3s ease",
        zIndex: 999,
        borderRight: "1px solid #e9ecef",
      }}
    >
      {/* Profile User */}
      <div
        className="d-flex align-items-center mb-4"
        style={{ padding: "0 20px" }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#87CEEB",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "15px",
          }}
        >
          <i
            className="fas fa-user"
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </div>
        <div>
          <h6
            style={{ color: "#343a40", marginBottom: "0", fontWeight: "600" }}
          >
            {userName}
          </h6>
        </div>
      </div>

      {/* Menu Items */}
      <Nav className="flex-column">
        <div style={{ padding: "0 20px" }}>
          {/* Dashboard */}
          <Nav.Link as={Link} to="/dashboard" className="sidebar-link mb-2">
            <i
              className="fas fa-home me-2"
              style={{ color: "#87CEEB", width: "20px" }}
            ></i>
            Dashboard
          </Nav.Link>

          {/* Pilihan Menu */}
          <div
            onClick={toggleMenu}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px 0",
            }}
          >
            <div className="d-flex align-items-center">
              <i
                className="fas fa-th-large me-2"
                style={{ color: "#87CEEB", width: "20px" }}
              ></i>
              <span style={{ fontWeight: "500", color: "#343a40" }}>
                Pilihan Menu
              </span>
            </div>
            <i
              className={`fas fa-chevron-${menuOpen ? "up" : "down"}`}
              style={{ fontSize: "12px", color: "#6c757d" }}
            ></i>
          </div>

          {menuOpen && (
            <>
              <Nav.Link as={Link} to="/diet" className="sidebar-link mb-2">
                <i
                  className="fas fa-leaf me-2"
                  style={{ color: "#87CEEB", width: "20px" }}
                ></i>
                Diet
              </Nav.Link>
              <Nav.Link as={Link} to="/bulking" className="sidebar-link mb-2">
                <i
                  className="fas fa-dumbbell me-2"
                  style={{ color: "#87CEEB", width: "20px" }}
                ></i>
                Bulking
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/maintenance"
                className="sidebar-link mb-2"
              >
                <i
                  className="fas fa-balance-scale me-2"
                  style={{ color: "#87CEEB", width: "20px" }}
                ></i>
                Maintenance
              </Nav.Link>
            </>
          )}

          <hr style={{ borderColor: "#e9ecef", margin: "20px 0 10px 0" }} />

          {/* Foto Makanan */}
          <Nav.Link as={Link} to="/foto-makanan" className="sidebar-link mb-2">
            <i
              className="fas fa-camera me-2"
              style={{ color: "#87CEEB", width: "20px" }}
            ></i>
            Foto Makanan
          </Nav.Link>
        </div>
      </Nav>

      {/* Logout */}
      {isLoggedIn && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <Nav.Link
            as={Link}
            to="/logout"
            className="sidebar-link"
            style={{ color: "#dc3545" }}
          >
            <i
              className="fas fa-sign-out-alt me-2"
              style={{ width: "20px" }}
            ></i>{" "}
            Logout
          </Nav.Link>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        .sidebar-link {
          color: #343a40;
          padding: 8px 0;
          border-radius: 5px;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .sidebar-link:hover {
          background-color: rgba(135, 206, 235, 0.1) !important;
          color: #87ceeb !important;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
