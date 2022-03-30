import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider/Slider';
import style from './home.module.css';
import './home.css';

const Home = () => {
  const dataSlide = [
    {
      imageUrl:
        'https://somosmas.org/wp-content/uploads/2018/03/como-lo-hacemos.jpg',
      text: 'Somos Mas',
    },
    {
      imageUrl: 'https://somosmas.org/wp-content/uploads/2020/04/vaki-1.jpg',
      text: 'Juntos por el Poder Colectivo',
    },
    {
      imageUrl: 'https://somosmas.org/wp-content/uploads/2018/03/historia.jpg',
      text: 'Construccion colectiva',
    },
  ];
  const news = [
    {
      imageUrl: '',
      text: '',
    },
  ];
  const welcomeText = 'Bienvenidos';

  const [data] = useState({
    welcome: welcomeText,
    slide: dataSlide,
    news: news,
  });

  return (
    <div id='home'>
      <Slider data={data.slide} />
      <h1 className={style.title}>{data.welcome}</h1>
      <h2 className={style.subtitle}>Ultimas novedades</h2>
      <div className={style.news_container}>
        {data.news.map((item, index) => {
          return (
            <article className={style.news} key={index}>
              <img src={item.imageUrl} alt='' />
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
