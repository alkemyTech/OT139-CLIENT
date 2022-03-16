import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { get } from '../../services/apiService';
import './newDetail.css';

const NewDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const url = `http://localhost3000/news/${id}`;

  useEffect(async () => {
    const info = await get(url);
    setData({
      ...data,
      info
    })
  }, [url]);

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
