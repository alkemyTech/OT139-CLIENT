import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import './menu.css';

export const AdminMenu = () => {
  return (
    <NavDropdown title='Backoffice' id='basic-nav-dropdown'>
      <NavDropdown.Item className='links'>
        <Link to='/backoffice/news'>Novedades</Link>
      </NavDropdown.Item>
      <NavDropdown.Item className='links'>
        <Link to='/backoffice/categories'>Categorias</Link>
      </NavDropdown.Item>
      <NavDropdown.Item className='links'>
        <Link to='/backoffice/testimonials'>Testimonios</Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
