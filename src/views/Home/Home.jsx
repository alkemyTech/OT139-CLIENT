import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './home.module.css';
import './home.css';

const Home = () => {
  const dataSlide = [
    {
      imageUrl:
        'https://somosmas.org/wp-content/uploads/2018/03/como-lo-hacemos.jpg',
      text: 'Slide uno',
    },
    {
      imageUrl: 'https://somosmas.org/wp-content/uploads/2020/04/vaki-1.jpg',
      text: 'Slide 2',
    },
    {
      imageUrl: 'https://somosmas.org/wp-content/uploads/2018/03/historia.jpg',
      text: '',
    },
  ];
  const news = [
    {
      imageUrl: '',
      text: '',
    },
  ];
  const welcomeText = 'Bienvenidos';

  const [data, setData] = useState({
    welcome: welcomeText,
    slide: dataSlide,
    news: news,
  });

  return (
    <div id='home'>
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
