import React, { useState, useEffect } from 'react'
import { Nav } from "react-bootstrap";
import './footer.css'

export const Footer = () => {
  const [logo, setLogo] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch("/1/public");
        const data = await response.json();
        
        setLogo(data.logo);
        setLinks(data.link);
      } catch(error) {
        console.log(error)
      }
    }

    getFooterData();
  });

  return (
    <footer className='footer'>
        <div className='footer-nav'>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Nav.Link href={`/`}>Noticias</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/`}>Actividades</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/`}>Novedades</Nav.Link>
                </Nav.Item>
            </div>
            <div className='footer-nav_column'>
                <img src={logo} alt="Logo somos mas"></img>
            </div>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Nav.Link href={`/`}>Testimonios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/`}>Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/`}>Contacto</Nav.Link>
                </Nav.Item>
            </div>
        </div>
        <div className='footer-social'>
            <div className='footer-social_icons'>
            {
                links.map((link) => {
                  return (
                    <a src={link} className='icon'>
                        <i className={`fab fa-${link}`}></i>
                    </a>
                  )
                })
            }
            <p>2021 by Alkemy. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
