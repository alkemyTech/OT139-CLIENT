import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Loader from '../loader/Loader.jsx';

export default function LoadingCard() {
  return (
    <Container as={Card} fluid='md'>
      <Card.Body className='text-center mx-auto my-4 py-5'>
        <Loader />
      </Card.Body>
    </Container>
  );
}
