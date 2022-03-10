import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './newDetail.css';

const NewDetail = () => {
  const [data, setData] = useState({info: ""});
  const {id} = useParams();
  const info = {
    image: 'https://images.unsplash.com/photo-1605457867610-e990b192418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80',
    name: "Lorem impsut",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis placeat explicabo quidem natus! Vero doloribus dolore minima quaerat voluptatibus? Tempore qui excepturi, deleniti facilis cum ipsum debitis nesciunt nobis!"
  }

  useEffect(() => {
    setData({info: info})
  })  

  return (
    <Card className='card'>
      <Card.Img variant='top' src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewDetail;
