import React from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/foodlist.css';

const foodItems = [
  {
    id: 1,
    name: 'Big and Juicy Wagyu Beef Cheeseburger',
    image: '/img/image-27.png',
  },
  {
    id: 2,
    name: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    image: '/img/image-27.png',
  },
  {
    id: 3,
    name: 'Strawberry Oatmeal Pancake with Honey Syrup',
    image: '/img/image-27.png',
  },
  {
    id: 4,
    name: 'Fresh and Healthy Mixed Mayonnaise Salad',
    image: '/img/image-27.png',
  },
  {
    id: 5,
    name: 'Chicken Meatballs with Cream Cheese',
    image: '/img/image-27.png',
  },
  {
    id: 6,
    name: 'Chicken Meatballs with Cream Cheese',
    image: '/img/image-27.png',
  },
  {
    id: 7,
    name: 'Fruity Pancake with Orange & Blueberry',
    image: '/img/image-27.png',
  },
  {
    id: 8,
    name: 'The Best Easy One Pot Chicken and Rice',
    image: '/img/image-27.png',
  },
  {
    id: 9,
    name: 'The Creamiest Creamy Chicken and Bacon Pasta',
    image: '/img/image-27.png',
  },
];

const FoodListPage = () => {

  return (
    <div className="foodlist-container">
      <Container fluid className="p-0">
        <Row className="text-center mb-4 mt-3">
          <Col>
            <h1 className="foodlist-title">Maintenance Menu</h1>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={6} lg={4}>
            <InputGroup className="search-bar-input-group">
              <Form.Control
                placeholder="Cari..."
                aria-label="Cari..."
                className="search-input"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="dark" className="search-button">
                <FontAwesomeIcon icon={faSearch} /> Cari
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Food Item Cards */}
        <Row className="g-4 food-cards-grid">
          {foodItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm food-list-card">
                <Card.Img variant="top" src={item.image} alt={item.name} className="food-list-card-img" />
                <Card.Body className="d-flex align-items-start">
                  <Card.Text className="food-list-card-text">{item.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <Row className="justify-content-center mt-5 mb-4">
          <Col xs="auto">
            <Pagination className="foodlist-pagination">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodListPage;