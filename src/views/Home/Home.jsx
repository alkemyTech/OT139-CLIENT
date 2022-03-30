import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider/Slider';
import { News } from '../News/News';
import './home.module.css';
import './home.css';
import 'animate.css';

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
  
  const welcomeText = 'Bienvenidos';

  const [data] = useState({
    welcome: welcomeText,
    slide: dataSlide,
  });

  return (
    <div id='home' className='animate__animated animate__fadeIn'>
      <Slider data={data.slide} />
      <h1 className="title">{data.welcome}</h1>
      <h2 className="subtitle">Ultimas novedades</h2>
      <News />
    </div>
  );
};

export default Home;
