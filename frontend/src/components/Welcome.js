import React from 'react';
import { Card, Button } from 'react-bootstrap';

const cardStyle = {
  padding: '2rem 1rem',
  marginBottom: '2rem',
  backgroundColor: '#e9ecef',
  borderRadius: '.3rem',
};

const Welcome = () => {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title className="display-4">Images Gallery</Card.Title>
        <Card.Text className="lead">
          This is a simple application that retrieves photos using Unsplash API.
          In order to start, enter any search term in the imput field.
        </Card.Text>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Welcome;
