import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './newDetail.css';

const NewDetail = () => {
  const {id} = useParams();
  const data = useFetch(`http://localhost:3000/news/${id}`);

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
