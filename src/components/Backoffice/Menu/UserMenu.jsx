import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { getUserInfo, deleteUserInfo } from '../../../localStorage/storage';
import './menu.css';

export const UserMenu = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    deleteUserInfo()
    navigate('/');
  }

  return (
    <NavDropdown title={`${ user }`} id='basic-nav-dropdown'>
      <NavDropdown.Item className='links'>
        <Link to='/my-profile'>Ir a mi perfil</Link>
      </NavDropdown.Item>
      <NavDropdown.Item className='links'>
        <button className="item" onClick={logout}>Cerrar sesión</button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
