import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { get } from '../../services/apiService';
import './newDetail.css';
import { ErrorAlert } from '../../components/Alert';
import 'animate.css';

const NewDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const url = `http://localhost3000/news/${id}`;

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await get(url);
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setData({
          ...data,
          data,
        });
      }
    }
    fetchData();
  }, [url]);

  return (
    <Card className='card animate__animated animate__fadeInUp'>
      <Card.Img variant='top' src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewDetail;
