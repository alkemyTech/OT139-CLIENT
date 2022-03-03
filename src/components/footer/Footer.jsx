import React, { useState, useEffect } from 'react'
import { Nav } from "react-bootstrap";
import {
  Twitter,
  Facebook,
  Envelope,
  Telephone
} from "react-bootstrap-icons";
import './footer.css'

export const Footer = () => {
  const [logo, setLogo] = useState("");
  const [links, setLinks] = useState([]);
  const [errors, setErrors] = useState([]);
  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch("/organizations/1/public");
        const data = await response.json();
        
        setLogo(data.logo);
        setLinks(data.link);
      } catch(error) {
        setErrors(error)
      }
    }

    getFooterData();
  });

  //Eliminar cuando tengamos el entry point
  const tempSocials = [
    { url: 'mailto:mail@mail.com', icon: Envelope },
    { url: 'http://facebook.com', icon: Facebook },
    { url: 'http://twitter.com', icon: Twitter },
    { url: 'tel:+5491161141500', icon: Telephone }
  ];

  return (
    <footer className='footer'>
        <div className='footer-nav'>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Nav.Link href={`/noticias`}>Noticias</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/actividades`}>Actividades</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/novedades`}>Novedades</Nav.Link>
                </Nav.Item>
            </div>
            <div className='footer-nav_column'>
                <img src={logo} alt="Logo somos mas"></img>
            </div>
            <div className='footer-nav_column'>
                <Nav.Item>
                  <Nav.Link href={`/testimonios`}>Testimonios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/nosotros`}>Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={`/contacto`}>Contacto</Nav.Link>
                </Nav.Item>
            </div>
        </div>
        <div className='footer-social'>
            <div className='footer-social_icons'>
              {tempSocials.map((social) => {
                const SocialIcons = social.icon
                return (
                    <a href={social.url} key={social.url}>
                      <SocialIcons className="icon"></SocialIcons>
                    </a>
                );
              })}
              { errors.length && <span className="bg-red text-white">{errors}</span> }
              <p>{ year } by Alkemy. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
