import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export const UserMenu = () => {
  return <Link className='link-perfil' to='/my-profile'>Ir a mi perfil</Link>;
};
