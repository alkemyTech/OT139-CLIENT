import React, { useEffect, useState } from 'react';
import TestimonyListRow from '../../components/TestimonyListRow/TestimonyListRow';
import TestimonyListEmptyRow from '../../components/TestimonyListEmptyRow/TestimonyListEmptyRow';
import { get } from '../../services/apiService';
import './testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    async function getTestimonials() {
      const { data, error } = await get('/testimonials');

      if (!error) {
        setTestimonials(data);
      }
    }

    getTestimonials();
  }, []);

  return (
    <div className='testimonials__container'>
      <header className='testimonials__header'>
        <div>
          <h2 className='testimonials__title'>Testimonios</h2>
          <h3 className='testimonials__subtitle'>
            Estos son los testimonios disponibles de nuestros socios.
          </h3>
        </div>
        <button type='button' className='testimonials__button'>
          + Nuevo
        </button>
      </header>
      <div class='testimony_list'>
        {(testimonials?.length === 0 || !testimonials) && <TestimonyListEmptyRow />}
        {testimonials && testimonials.map(testimony => (
          <TestimonyListRow key={testimony.id} name={testimony.name} />
        ))}
      </div>
    </div>
  );
}
