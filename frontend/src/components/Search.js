import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center ">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  // With the porps word and set word we place them here to make this a controlled input
                  value={word}
                  // updates with help of setWord the value stored inside of app component
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image here:"
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
