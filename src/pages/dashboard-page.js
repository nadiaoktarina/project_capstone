import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../CSS/dashboard.css';

const headerBg = '/img/dashboard.jpg';
const foodImagePlaceholder = '/img/image-27.png';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container fluid className='p-1'>
        <Row className="welcome-header-row mb-5" style={{ backgroundImage: `url(${headerBg})` }}>
          <Col>
            <h2 className="welcome-text">Selamat Datang, abcde</h2>
          </Col>
        </Row>

        <div style={{ height: '50px' }}></div>

        <Row className="mt-5 info-cards-row">
          <Col xs={6} md={3}>
            <Card className="h-100 shadow-sm info-card">
              <Card.Body className="py-3 text-center">
                <Card.Title className="info-card-title">Berat Badan</Card.Title>
                <Card.Text className="info-card-value">68KG</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="h-100 shadow-sm info-card">
              <Card.Body className="py-3 text-center">
                <Card.Title className="info-card-title">Tinggi Badan</Card.Title>
                <Card.Text className="info-card-value">175 CM</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="h-100 shadow-sm info-card">
              <Card.Body className="py-3 text-center">
                <Card.Title className="info-card-title">BMI</Card.Title>
                <Card.Text className="info-card-value">22.2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="h-100 shadow-sm info-card">
              <Card.Body className="py-3 text-center">
                <Card.Title className="info-card-title">Target</Card.Title>
                <Card.Text className="info-card-value">Diet</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <Row className="mt-4 mb-5">
          <Col>
            <Button className="liat-semua-btn">
              Lihat Semua
            </Button>
          </Col>
        </Row> */}
        
        <Row className="g-3 food-cards-row">
          <Col xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm food-card">
              <Card.Img variant="top" src={foodImagePlaceholder} alt="Big and Juicy Wagyu Beef Cheeseburger" className="food-card-img" />
              <Card.Body>
                <Card.Text className="food-card-text">Big and Juicy Wagyu Beef Cheeseburger</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm food-card">
              <Card.Img variant="top" src={foodImagePlaceholder} alt="Fresh Lime Roasted Salmon with Ginger Sauce" className="food-card-img" />
              <Card.Body>
                <Card.Text className="food-card-text">Fresh Lime Roasted Salmon with Ginger Sauce</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm food-card">
              <Card.Img variant="top" src={foodImagePlaceholder} alt="Strawberry Oatmeal Pancake with Honey Syrup" className="food-card-img" />
              <Card.Body>
                <Card.Text className="food-card-text">Strawberry Oatmeal Pancake with Honey Syrup</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm food-card">
              <Card.Img variant="top" src={foodImagePlaceholder} alt="Chicken Meatballs with Cream Cheese" className="food-card-img" />
              <Card.Body>
                <Card.Text className="food-card-text">Chicken Meatballs with Cream Cheese</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;