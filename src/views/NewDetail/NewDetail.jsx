import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { get } from '../../services/apiService';
import './newDetail.css';
import { ErrorAlert } from '../Alert';

const NewDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const url = `http://localhost3000/news/${id}`;

  useEffect(async () => {
    const {data, error} = await get(url);
    if(error){
      ErrorAlert('Error!', 'Ocurrio un error');
    }else{
      setData({
        ...data,
        data
      })
    }
    
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