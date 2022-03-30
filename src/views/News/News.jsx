import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { get } from '../../services/apiService';
import { ErrorAlert } from '../../components/Alert';
import 'animate.css';

export const News = () => {
  const [news, setNews] = useState([]);
  const url = `http://localhost:3000/news`;

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await get(url);
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setNews(data);
      }
    }
    fetchData();
  }, [url]);

  return (
    <Container className="animate__animated animate__fadeIn">
      <Row>
        {news.map((item) => {
          return (
            <Col className='mt-5'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Link to={`/news/${item.id}`} variant='primary'>
                    Ver noticia
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
