import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { deleteUserInfo } from '../../../localStorage/storage';
import './menu.css';

export const UserMenu = ({ userInfo }) => {
  const navigate = useNavigate();

  const logout = () => {
    deleteUserInfo()
    navigate('/');
  }

  return (
    <NavDropdown title={`${ userInfo.firstName }`} id='basic-nav-dropdown'>
      <NavDropdown.Item className='links'>
        <Link to='/my-profile'>Ir a mi perfil</Link>
      </NavDropdown.Item>
      <NavDropdown.Item className='links'>
        <button className="item" onClick={logout}>Cerrar sesión</button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
