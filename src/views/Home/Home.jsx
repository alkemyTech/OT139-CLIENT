import React from 'react';
import Slider from '../../components/Slider/Slider';
import './home.css';

function Home() {
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

  return (
    <div id='home'>
      <Slider data={dataSlide} />
    </div>
  );
}

export default Home;
