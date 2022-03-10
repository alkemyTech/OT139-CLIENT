import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import {
  Twitter,
  Facebook,
  Vimeo,
  Linkedin,
  Youtube
} from "react-bootstrap-icons";
import './footer.css';

export const Footer = () => {
  const [logo, setLogo] = useState("");
  const [links, setLinks] = useState([]);
  const [errors, setErrors] = useState([]);
  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    async function getFooterData() {
      try {
        await fetch("http://localhost:3000/organizations/1/public")
        .then(data => {
          return data.json()
        })
        .then(data => {
          setLogo(data.image)
        })
        
      } catch(error) {
        setErrors(error)
      }
    }
    getFooterData();
  }, []);

  return (
    <footer className='footer'>
        <div className='footer-nav'>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Link to={`/noticias`}>Noticias</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={`/actividades`}>Actividades</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={`/novedades`}>Novedades</Link>
                </Nav.Item>
            </div>
            <div className='footer-nav_column'>
              {!logo ? "Logo somos mas" : <img src={logo} alt="Logo somos mas"></img>
              }
            </div>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Link to={`/testimonios`}>Testimonios</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={`/nosotros`}>Nosotros</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={`/contacto`}>Contacto</Link>
                </Nav.Item>
            </div>
        </div>
        <div className='footer-social'>
            <div className='footer-social_icons'>
              <a href={``}>
                <Facebook className="icon"></Facebook>
              </a>
              <a href={``}>
                <Twitter className="icon"></Twitter>
              </a>
              <a href={``}>
                <Vimeo className="icon"></Vimeo>
              </a>
              <a href={``}>
                <Linkedin className="icon"></Linkedin>
              </a>
              <a href={``}>
                <Youtube className="icon"></Youtube>
              </a>

              <p>{ year } by Alkemy. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
