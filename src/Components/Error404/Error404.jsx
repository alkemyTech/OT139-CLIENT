import React from 'react';
import './error404.css';
export default function h1() {
  return (
    <div className='text-center border solid'>
      <h1 className='mb-3'>La actividad no existe!</h1>
      <div className='d-flex justify-content-center'>
        <h1 className='color_red font_size'>4</h1>
        <h1 className='color_yellow font_size'>0</h1>
        <h1 className='color_blue font_size'>4</h1>
      </div>
    </div>
  );
}
