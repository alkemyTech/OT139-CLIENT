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
  const [socialMedias, setSocialMedias] = useState([]);
  const arraySocialMedias = Object.entries(socialMedias);
  console.log({array: arraySocialMedias})
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch("http://localhost:3000/organizations/1/public");
        const data = await response.json();
        setLogo(data.image);
        setSocialMedias(data.social);
      } catch (error) {
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
            <Link to={`/about`}>Acerca</Link>
            <Link to={`/contact`}>Nosotros</Link>
          </Col>
          <Col className="footer-links">
            {arraySocialMedias.map(socialMediaItem => {
              return (
                <a href={`${socialMediaItem[1]}`}>{socialMediaItem[0]}</a>)
            })}
          </Col>
        </Row>
      </Container>
    </footer>
  )
} 
