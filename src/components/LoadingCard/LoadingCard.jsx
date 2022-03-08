import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingCard() {
  return (
    <Container as={Card} fluid='md'>
      <Card.Body className='text-center mx-auto my-4'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </Spinner>
        <p>Cargando</p>
      </Card.Body>
    </Container>
  );
}
