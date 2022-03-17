import React, { useState, useEffect } from 'react';
import CustomLink from '../CustomLink/CustomLink.jsx';
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

export default function Header() {
  const [logo, setLogo] = useState('');
  const [errors, setError] = useState(null);

  useEffect(() => {
    async function getOrganizationLogo() {
      const response = await get('/organizations/1/public');
      const isValidResponse = response && !(response instanceof Error);

      if (isValidResponse) {
        setLogo(response.logo);
      } else {
        setError(true);
      }
    }

    getOrganizationLogo();
  }, []);

  return (
    <ul>
      {!errors && (
        <img
          src={logo}
          width='auto'
          height='40'
          className='d-inline-block align-top'
          alt='Logo somos más'
        />
      )}
      {menu.map((menuItem) => {
        return (
          <li key={menuItem.name}>
            <CustomLink to={menuItem.url}>
              {menuItem.name}
            </CustomLink>
          </li>
        );
      })}
    </ul>
  );
}
