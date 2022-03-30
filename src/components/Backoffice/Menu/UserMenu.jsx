import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userActions';
import './menu.css';
import { ConfirmAlert } from '../../../components/Alert/index';

export const UserMenu = ({ userInfo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    ConfirmAlert('¿Está seguro que desea cerrar sesión?', '').then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate('/');
      }
    });
  };

  return (
    <NavDropdown title={`${userInfo.firstName}`} id='basic-nav-dropdown'>
      <Link to='/myprofile' className='links'>
        Ir a mi perfil
      </Link>
      <NavDropdown.Item className='links'>
        <button className='item' onClick={logoutUser}>
          Cerrar sesión
        </button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
