import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const News = () => {
    // Array con datos de ejemplo que se eliminaran cuando tengamos el endpoint
    const initialData = [{
        id: '1',
        name: "Titulo Card 1",
        image: "https://images.unsplash.com/photo-1605457867610-e990b192418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80",
    }, {
        id: '2',
        name: "Titulo Card 2",
        image: 'https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }, {
        id: '3',
        name: "Titulo Card 3",
        image: 'https://images.unsplash.com/photo-1513972400628-4ae6371f9124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    }]
    const [news, setNews] = useState(initialData);
    const [errors, setErrors] = useState([])
    
    useEffect(() => {
        async function getNews (){
            try {
                const response = await fetch("/news");
                const data = await response.json();
                
                setNews(data);
            } catch(error) {
                setErrors(error)
            }
        }
        getNews()
    }, [])

    return (
    <Container>
        <Row>
            { news.map((item)=>{
                return <Col className="mt-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ item.image } />
                        <Card.Body>
                            <Card.Title>{ item.name }</Card.Title>
                            <Link to={`/news/${ item.id }`} variant="primary">Ver noticia</Link>
                        </Card.Body>
                    </Card>
                </Col> 
            })
            }
        </Row>
    </Container>
    )
}
