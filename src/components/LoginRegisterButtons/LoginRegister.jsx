import React from 'react';
import { Link } from 'react-router-dom';

export const LoginRegister = () => {
  return <>
    <Link className='link-perfil btn btn-outline-primary m-3' to='/register'>Registrarse</Link>
    <Link className='link-perfil btn btn-success' to='/login'>Ingresar</Link>
  </>
}
