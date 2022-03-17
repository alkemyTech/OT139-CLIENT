import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const News = () => {
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch('http://localhost:3000/news');
        const data = await response.json();

        setNews(data);
      } catch (error) {
        setErrors(error);
      }
    }
    getNews();
  }, []);

  return (
    <Container>
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
