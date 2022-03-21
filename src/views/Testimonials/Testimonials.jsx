import React, { useEffect, useState } from 'react';
import TestimonyListRow from '../../components/TestimonyListRow/TestimonyListRow';
import TestimonyListEmptyRow from '../../components/TestimonyListEmptyRow/TestimonyListEmptyRow';
import { ErrorAlert, ConfirmAlert } from '../../components/Alert';
import { get, httpDelete } from '../../services/apiService';
import './testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const handleAddTestimony = () => {
    // @TODO: Integrar con el formulario de edición de testimonios
  };

  const handleEditTestimony = (id) => () => {
    // @TODO: Integrar con el formulario de edición de testimonios
  };

  const handleDeleteTestimony = (id) => async () => {
    const { isConfirmed } = await ConfirmAlert(
      '¿Eliminar este testimonio?',
      'Esta acción no se puede deshacer.'
    );

    if (isConfirmed) {
      const { error } = await httpDelete(`/testimonials/${id}`);

      if (!error) {
        const filteredTestimonials = testimonials.filter(
          (testimony) => testimony.id !== id
        );
        setTestimonials(filteredTestimonials);
      } else {
        ErrorAlert(
          'Testimonio no eliminado',
          'Ocurrio un error procesando su solicitud. Vuelva a intentarlo en unos momentos.'
        );
      }
    }
  };

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
        <button
          type='button'
          onClick={handleAddTestimony}
          className='testimonials__button'
        >
          + Nuevo
        </button>
      </header>
      <div className='testimony_list'>
        {(testimonials?.length === 0 || !testimonials) && (
          <TestimonyListEmptyRow />
        )}
        {testimonials &&
          testimonials.map((testimony) => (
            <TestimonyListRow
              key={testimony.id}
              name={testimony.name}
              onEdit={handleEditTestimony(testimony.id)}
              onDelete={handleDeleteTestimony(testimony.id)}
            />
          ))}
      </div>
    </div>
  );
}
