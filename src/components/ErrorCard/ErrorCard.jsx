import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../../shared/style/colorOng.css';
import './errorCard.css';

export default function ErrorCard({ title, text }) {
  const defaults = {
    title: 'Algo salio mal procesando su solicitud.',
    text: 'Por favor vuelva a intentarlo en unos instantes.',
  }

  return (
    <Container as={Card} fluid='md' border='danger'>
      <Card.Body>
        <img
          className='error_card_svg mx-auto mb-4'
          src={`${process.env.PUBLIC_URL}/images/assets/page-not-found.svg`}
          alt='error resource not found'
        />
        <h4 className='color_red_ong text-center'>
          {title ?? defaults.title}
        </h4>
        <p className='color_red_ong text-center'>
          {text ?? defaults.text}
        </p>
      </Card.Body>
    </Container>
  );
}
