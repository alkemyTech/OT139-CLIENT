import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

export default function Slider(props) {
  return (
    <Container fluid>
      <Carousel>
        {props?.data?.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className='d-block w-100 center'
                src={item.imageUrl}
                alt={item.text}
              />
              <Carousel.Caption>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
