import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselComponent({ arrayImgState }) {
  return (
    <div className="h-50">
      <Carousel fade>
        {arrayImgState.map((image , index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.img} alt={image.text} />
            <Carousel.Caption>
              <h3 className="text-black text-start">{image.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
