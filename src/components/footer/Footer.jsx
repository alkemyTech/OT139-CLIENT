import React, { useState, useEffect } from 'react'
import './footer.css'

export const Footer = () => {
  const [logo, setLogo] = useState("");
  const [socialMedia, setSocialMedia] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    async function getFooterData() {
      try {
        const response = await fetch("/1/public");
        const data = await response.json();
        
        setLogo(data.logo);
        setSocialMedia(data.socialMedia);
      } catch(err) {
        setError(err)
      }
    }

    getFooterData();
  });

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
            {
                socialMedia.map((socialMediaItem) => {
                  return (
                    <a src={socialMediaItem.link} className='icon'>
                        <i className={`fab fa-${socialMediaItem.linkName}`}></i>
                    </a>
                  )
                })
            }
            <p>2021 by Alkemy. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
