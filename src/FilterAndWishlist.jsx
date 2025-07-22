import React, { useState } from 'react';

const FilterAndWishlist = () => {
  //  product data
  const products = [
    { id: 1, name: 'Modern Sofa', category: 'Furniture', subcategory: 'Living Room', price: 500, rating: 4 },
    { id: 2, name: 'Dining Table', category: 'Furniture', subcategory: 'Dining Room', price: 800, rating: 5 },
    { id: 3, name: 'Bed Frame', category: 'Furniture', subcategory: 'Bedroom', price: 400, rating: 3 },
    { id: 4, name: 'Floor Lamp', category: 'Decor', subcategory: 'Lighting', price: 150, rating: 5 },
    { id: 5, name: 'Curtains', category: 'Decor', subcategory: 'Window Treatments', price: 100, rating: 4 },
  ];

  // States for filters
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');

  // State for wishlist
  const [wishlist, setWishlist] = useState([]);

  // Handle filtering products based on selected criteria
  const filteredProducts = products.filter((product) => {
    return (
      (!category || product.category === category) &&
      (!subcategory || product.subcategory === subcategory) &&
      (!priceRange || product.price <= priceRange) &&
      (!rating || product.rating >= rating)
    );
  });

  // Add product to wishlist
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <Container>
      <h2>Product Filters & Wishlist</h2>

      {/* Filters Section */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" onChange={(e) => setCategory(e.target.value)} value={category}>
              <option value="">All</option>
              <option value="Furniture">Furniture</option>
              <option value="Decor">Decor</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Subcategory</Form.Label>
            <Form.Control as="select" onChange={(e) => setSubcategory(e.target.value)} value={subcategory}>
              <option value="">All</option>
              <option value="Living Room">Living Room</option>
              <option value="Dining Room">Dining Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Lighting">Lighting</option>
              <option value="Window Treatments">Window Treatments</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Price Range (Max)</Form.Label>
            <Form.Control as="select" onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
              <option value="">All</option>
              <option value="200">$200</option>
              <option value="500">$500</option>
              <option value="800">$800</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Rating (Min)</Form.Label>
            <Form.Control as="select" onChange={(e) => setRating(e.target.value)} value={rating}>
              <option value="">All</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {/* Filtered Products Section */}
      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
                <Card.Text>Subcategory: {product.subcategory}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Rating: {product.rating} Stars</Card.Text>
                <Button variant="primary" onClick={() => addToWishlist(product)}>
                  Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Wishlist Section */}
      <h3 className="mt-5">Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>No products added to wishlist yet.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.subcategory}</td>
                <td>${item.price}</td>
                <td>{item.rating} Stars</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default FilterAndWishlist;