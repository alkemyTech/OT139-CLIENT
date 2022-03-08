import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './errorCard.css';

export default function ErrorCard({ title, text }) {
  return (
    <Container as={Card} fluid='md' border='danger'>
      <Card.Body>
        <img
          className='error_card_svg mx-auto mb-4'
          src='images/assets/page-not-found.svg'
          alt='error resource not found'
        />
        <h4 className='color_danger text-center'>{title}</h4>
        <p className='color_danger text-center'>{text}</p>
      </Card.Body>
    </Container>
  );
}