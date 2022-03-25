import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { deleteUserInfo } from '../../../localStorage/storage';
import './menu.css';

export const AdminMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteUserInfo()
    navigate('/');
  }

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
      <NavDropdown.Item className='links'>
        <button className="item" onClick={logout}>Cerrar sesión</button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
