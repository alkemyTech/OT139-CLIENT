import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider/Slider';
import style from './home.module.css';
import './home.css';

const Home = () => {
  const [data, setData] = useState({ welcome: '', slide: [], news: []});
  const welcomeText = 'Bienvenidos';

  useEffect(() => {
    setData({
      ...data,
      welcome: welcomeText,
      slide: dataSlide,
      news: news
    });
  }, [welcomeText, dataSlide, news]);

  return (
    <div id='home'>
      <h1 className={style.title}>{data.welcome}</h1>
      <h2 className={style.subtitle}>Ultimas novedades</h2>
      <div className={style.news_container}>
      {data.news.map((item, index) => {
        return (
          <article className={style.news} key={index}>
            <img src={item.imageUrl} alt="" />
            <p>{item.text}</p>
          </article>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
