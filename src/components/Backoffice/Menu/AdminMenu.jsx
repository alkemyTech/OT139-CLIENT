import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userActions';
import './menu.css';

export const AdminMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout())
    navigate('/');
  }

  return (
    <NavDropdown title='Backoffice' id='basic-nav-dropdown'>
      <Link to='/backoffice/news' className='links'>Novedades</Link>
      <Link to='/backoffice/categories' className='links'>Categorias</Link>
      <Link to='/backoffice/testimonials' className='links'>Testimonios</Link>
      <Link to='/backoffice/activities' className='links'>Actividades</Link>
      <NavDropdown.Item className='links'>
        <button className="item" onClick={logoutUser}>Cerrar sesión</button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
