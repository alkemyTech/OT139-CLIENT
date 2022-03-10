import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider/Slider';
import style from './home.module.css';
import './home.css';

const Home = () => {
  const [data, setData] = useState({welcome: "", slide: []});
  const welcomeText = "Bienvenidos";
  const dataSlide = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1605457867610-e990b192418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80',
      text: 'Slide uno',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: 'Slide 2',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1513972400628-4ae6371f9124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      text: '',
    },
  ];

useEffect(() => {
    setData({
      ...data,
      welcome: welcomeText,
      slide: dataSlide})
  }, [welcomeText, dataSlide]);

  

    return(
      <div id='home'>
            <Slider data={data.slide}/> 
            <h1 className={style.title}>{data.welcome}</h1> 
            <h2 className={style.subtitle}>Ultimas novedades</h2>
            <div className={style.news_container}>
              <article className={style.news}></article>
              <article className={style.news}></article>
              <article className={style.news}></article>
              <article className={style.news}></article>
            </div>
            <div className={style.a}>
              <div className={style.div_info}>
              <a href='/' className={style.testimonials}>Testimonios</a>
              <a href='/'>Contacto</a>
              </div>
              
              <a href='/' className={style.see_more}>Ver todas</a>
            </div>
        </div>
    );
}

export default Home;
