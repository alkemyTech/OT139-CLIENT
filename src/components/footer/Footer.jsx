import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './footer.css';

const footerData = {
  logo: "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png"
}
const footerSocialMedias = [{ url: "facebook.com", name: "Facebook" }, { url: "twitter.com", name: "Twitter" }, { url: "vimeo.com", name: "Vimeo" }, { url: "linkedin.com", name: "LinkedIn" }, { url: "youtube.com", name: "Youtube" }]

export const Footer = () => {
  const [logo, setLogo] = useState([]);
  const [socialMedias, setSocialMedias] = useState([footerSocialMedias]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    //TODO @Implementar obtencion de datos desde endpoint
    setLogo(footerData)
    setSocialMedias(footerSocialMedias);
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
            <Link to={`/about`}>Acerca</Link>
            <Link to={`/contact`}>Nosotros</Link>
          </Col>
          <Col className="footer-links">
            {socialMedias.map(socialMediaItem => {
              return (
                <a href={`${socialMediaItem.url}`}>{socialMediaItem.name}</a>)
            })}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
