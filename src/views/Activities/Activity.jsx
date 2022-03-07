import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './activity.css';
import "../../shared/style/baseStyle.css";
import "../../shared/style/colorOng.css";

export default function ActivityView() {
  const [data, setData] = useState();

  return (
    <div className='text-center m-5'>
      {!data ? (
      <div className='container_error color_red_ong'><h1>error no hay datos para esa actividad!</h1></div>
      ) : (
        <div>
          <div className='mb-4'>
            <h1 className='color_red_ong pt-3'>{data.name}</h1>
          </div>
          <div className='border solid p-5 background_gray'>
            <p>{data.content}</p>
          </div>
          <div className='mt-5'>
            <img src={data.image} alt='' />
          </div>
          <div></div>
        </div>
      )}
      <Link to='/Actividades'>
        <Button className='button_style mt-5'>Volver a las Actividades</Button>
      </Link>
    </div>
  );
}
