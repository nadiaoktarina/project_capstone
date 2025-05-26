import { Col, Container, Row, Card, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import AppNav from "../components/navbar";
import "../CSS/DetailMakanan.css";

const DetailMakanan = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleKembali = () => {
    navigate(-1);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menus = [
    { label: "Diet", icon: "fa-leaf" },
    { label: "Bulking", icon: "fa-dumbbell" },
    { label: "Maintenance", icon: "fa-balance-scale" },
  ];

  return (
    <div className="detail-makanan-wrapper">
      <AppNav toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} userName="John Doe" />

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Container className="py-5">
          <Row className="mb-4">
            <Col className="d-flex justify-content-between align-items-center">
              <h2 className="title">Detail Makanan</h2>
              <Dropdown>
                <Dropdown.Menu>
                  {menus.map((menu, i) => (
                    <Dropdown.Item key={i} eventKey={menu.label}>
                      <i className={`fas ${menu.icon} me-2`} />
                      {menu.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row>
            <Col lg={6} className="mb-4">
              <Card className="photo-card">
                <Card.Body>
                  <Card.Title className="card-title">Foto Makanan</Card.Title>
                  <div className="image-placeholder">
                    <div className="text-center">
                      <i className="fas fa-image placeholder-icon"></i>
                      <p className="placeholder-text">Gambar Makanan</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5 className="food-name">Nasi Goreng Ayam</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="nutrition-card">
                <Card.Body>
                  <Card.Title className="card-title">
                    Informasi Nutrisi
                  </Card.Title>
                  <div className="mt-3">
                    {[
                      ["Calories", "350 kcal"],
                      ["Total Fat", "15g"],
                      ["Protein", "15g"],
                      ["Carbohydrate", "45g"],
                      ["Cholesterol", "37.4g"],
                      ["Calcium", "30mg"],
                      ["Fiber", "30mg"],
                      ["Iron", "2.5mg"],
                      ["Sugar", "3g"],
                    ].map(([label, value], i) => (
                      <div key={i} className="nutrition-row">
                        <span>{label}</span>
                        <span className="fw-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="dark"
                      onClick={handleKembali}
                      className="btn-kembali"
                    >
                      <i className="fas fa-arrow-left me-2"></i>
                      Kembali
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DetailMakanan;
