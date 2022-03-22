import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { get } from '../../services/apiService';
import { Menu } from '../Backoffice/Menu/Menu';

import './header.css';

const menu = [
  {
    name: 'Inicio',
    url: '/',
  },
  {
    name: 'Nosotros',
    url: '/about',
  },
  {
    name: 'Contacto',
    url: '/contact',
  },
];

export default function Header() {
  const [logo, setLogo] = useState('');
  const [errors, setError] = useState(null);

  useEffect(() => {
    async function getOrganizationLogo() {
      const { data, error } = await get('http://localhost:3000/organizations/1/public');

      if (!error) {
        setLogo(data.image);
      } else {
        setError(true);
      }
    }

    getOrganizationLogo();
  }, []);

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
                <li key={menuItem.name}>
                  <CustomLink to={menuItem.url}>{menuItem.name}</CustomLink>
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
