import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ErrorAlert } from '../../components/Alert';
import { getEntries } from '../../services/newsService';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await getEntries();
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setNews(data);
      }
    };
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
