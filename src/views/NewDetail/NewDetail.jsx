import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './newDetail.css';
import { ErrorAlert } from '../../components/Alert';
import { getEntry } from '../../services/newsService';

const NewDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getNewsDetails = async () => {
      const { data, error } = await getEntry(id);
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setData({
          ...data,
          data,
        });
      }
    };

    getNewsDetails();
  }, [id]);

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
