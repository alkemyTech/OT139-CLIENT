import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';
import { Menu } from '../Backoffice/Menu/Menu';

const headerData = {
  logo: 'https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png',
  menu: [
    { name: 'Home', url: '/' },
    { name: 'Nosotros', url: '/contact' },
  ],
};

export function Header() {
  const [logo, setLogo] = useState('');
  const [menu, setMenu] = useState([]);
  const [errors, setError] = useState([]);

  useEffect(() => {
    //TODO @Implementar obtencion de datos desde endpoint
    setLogo(headerData.logo);
    setMenu(headerData.menu);
  });

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width='auto'
            height='40'
            className='d-inline-block align-top'
            alt='Logo somos más'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {menu.map((menuItem) => {
              return (
                <li>
                  <Link to={menuItem.url}>{menuItem.name}</Link>
                </li>
              );
            })}
          </Nav>
          <Menu />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
