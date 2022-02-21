import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider(props) {
  return (
    <Carousel>
      {props?.data?.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img className="d-block" src={item.imageUrl} alt={item.text} />
            <Carousel.Caption>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
