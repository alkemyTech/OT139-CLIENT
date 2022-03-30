import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { get } from '../../services/apiService';

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

export default function Header({ Menu, userInfo }) {
  const [logo, setLogo] = useState('');
  const [errors, setError] = useState(null);

  useEffect(() => {
    async function getOrganizationLogo() {
      const { data, error } = await get(
        'http://localhost:3000/organizations/1/public'
      );

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
          {logo && !errors && (
            <img
              src={logo}
              width='100px'
              className='d-inline-block align-top'
              alt='Logo somos más'
            />
          )}
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
          <Menu userInfo={userInfo} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
