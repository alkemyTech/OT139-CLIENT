import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './activity.css';
import "../../shared/style/baseStyle.css";
import "../../shared/style/colorOng.css";

export default function ActivityView() {
  const [data, setData] = useState();

  return (
    <div className='text-center content_all'>
      {!data ? (
      <div className='container_error color_red_ong mt-5'><h1>Error no hay datos para esta actividad!</h1></div>
      ) : (
        <div>
          <div className='mb-4'>
            <h1 className='color_red_ong pt-3'>{data.name}</h1>
          </div>
          <div className='border solid p-3 background_gray content_text m-1'>
            <p>{data.content}</p>
          </div>
          <div className='mt-5 m-1'>
            <img className='w-100' src={data.image} alt='' />
          </div>
          <div></div>
        </div>
      )}
      <Link to='/activity'>
        <Button className='button_style mt-5 mb-5 w-50'>Volver a las Actividades</Button>
      </Link>
    </div>
  );
}
