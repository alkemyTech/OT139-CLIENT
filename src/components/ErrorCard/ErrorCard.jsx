import React from 'react';
import Card from 'react-bootstrap/Card';
import './errorCard.css';

export default function ErrorCard({ title, text }) {
  return (
    <Card border='danger' className='my-4'>
      <Card.Body>
        <img
          className='error_card_svg mb-4'
          src='images/assets/page-not-found.svg'
          alt='error resource not found'
        />
        <h4 className='color_danger text-center'>{title}</h4>
        <p className='color_danger text-center'>{text}</p>
      </Card.Body>
    </Card>
  );
}
