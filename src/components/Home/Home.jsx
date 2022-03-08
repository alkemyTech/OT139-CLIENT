import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider/Slider';
import style from './home.module.css';
import './home.css';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  const welcomeText = useFetch(url);
  const dataSlide = useFetch(url);

    return(
      <div id='home'>
            <Slider data={dataSlide}/> 
            <h1 className={style.title}>{welcomeText}</h1> 

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
