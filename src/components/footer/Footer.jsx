import React from 'react'
import './footer.css'
import logo from '../../assets/images/LOGO-SOMOS MAS.png'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-nav'>
            <div className='footer-nav_column'>
                <span>Noticias</span>
                <span>Actividades</span>
                <span>Novedades</span>
            </div>
            <div className='footer-nav_column'>
                <img src={logo} alt="Logo somos mas"></img>
            </div>
            <div className='footer-nav_column'>
                <span>Testimonios</span>
                <span>Nosotros</span>
                <span>Contacto</span>
            </div>
        </div>
        <hr></hr>
        <div className='footer-social'>
            <div className='footer-social_icons'>
            <img src={logo} className="icon" alt="Logo somos mas"></img>
            <img src={logo} className="icon" alt="Logo somos mas"></img>
            <img src={logo} className="icon" alt="Logo somos mas"></img>
            <img src={logo} className="icon" alt="Logo somos mas"></img>
            <p>2021 by Alkemy. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
