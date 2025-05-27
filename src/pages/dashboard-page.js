import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../CSS/dashboard.css";

const headerBg = "/img/dashboard.jpg";
const foodImagePlaceholder = "/img/image-27.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Container className='p-0'>
        <div 
          className="dashboard-header py-5" 
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          <Container>
            <h2 className="header-text">Selamat Datang, abcde</h2>
          </Container>
        </div>

        <Container className="py-4">
          <Row className="mb-4">
            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className='info-card-title'>Berat Badan</Card.Title>
                  <Card.Text className='info-card-title'>68KG</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className='info-card-title'>Tinggi Badan</Card.Title>
                  <Card.Text className='info-card-title'>175 CM</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className='info-card-title'>BMI</Card.Title>
                  <Card.Text className='info-card-title'>22.2</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title className='info-card-title'>Target</Card.Title>
                  <Card.Text className='info-card-title'>Diet</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-3 food-cards-row mb-5">
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
      </Container>
    </div>
  );
};

export default Dashboard;
