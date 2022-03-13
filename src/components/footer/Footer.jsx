import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './footer.css';

export const Footer = () => {
  const [logo, setLogo] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch("http://localhost:3000/organizations/1/public");
        const data = await response.json();
        setLogo(data.image);
      } catch(error) {
        setErrors(error);
      }
    }
    
    getFooterData();
  }, []);

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col>
            {!logo ? "Logo somos mas" : <img src={logo} alt="Logo somos mas"></img>
              }
          </Col>
          <Col className='footer-links'>
            <Link to={`/about`}>Nosotros</Link>
            <Link to={`/contact`}>Contacto</Link>
          </Col>
          <Col className="footer-links">
            <a href={``}>Facebook</a>
            <a href={``}>Twitter</a>
            <a href={``}>Vimeo</a>
            <a href={``}>Linkedin</a>
            <a href={``}>Youtube</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
