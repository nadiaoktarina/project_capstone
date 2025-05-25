import { Navbar, Nav, Button } from "react-bootstrap";

const AppNav = ({ toggleSidebar }) => {
  return (
    <Navbar
      bg="white"
      variant="light"
      className="px-3 border-bottom"
      style={{
        height: "60px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Hamburger Menu di kiri */}
      <Button
        variant="outline-secondary"
        onClick={toggleSidebar}
        style={{
          border: "none",
          backgroundColor: "transparent",
          color: "#6c757d",
        }}
      >
        <i className="fas fa-bars"></i>
      </Button>

      {/* Spacer untuk mendorong logo ke kanan */}
      <Nav className="me-auto"></Nav>

      {/* Logo gambar BetterBite di kanan */}
      <Navbar.Brand className="d-flex align-items-center">
        <img
          src="/img/BetterBite.png"
          alt="BetterBite Logo"
          style={{
            height: "25px", // Ukuran logo disesuaikan, tidak terlalu besar
            width: "auto", // Biarkan proporsional
            objectFit: "contain",
            display: "block",
          }}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default AppNav;
