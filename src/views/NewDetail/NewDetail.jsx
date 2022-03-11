import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './newDetail.css';

const NewDetail = () => {
  const [data, setData] = useState({ info: '' });
  const { id } = useParams();
  const url = `http://localhost3000/news/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(
          {
            ...data,
            info: data,
          },
          [url]
        );
      });
  });

  return (
    <Card className='card'>
      <Card.Img variant='top' src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewDetail;
