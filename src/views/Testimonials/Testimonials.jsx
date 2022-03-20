import React from 'react';
import TestimonyListRow from '../../components/TestimonyListRow/TestimonyListRow';
import TestimonyListEmptyRow from '../../components/TestimonyListEmptyRow/TestimonyListEmptyRow';
import './testimonials.css';

let names = [
  'Anthony Jefferson Jr.',
  'Jessica',
  'Rodrigo',
  'Steven',
  'Gonzalo',
];

export default function Testimonials() {
  return (
    <div className='testimonials__container'>
      <header className='testimonials__header'>
        <div>
          <h2 className='testimonials__title'>Testimonios</h2>
          <h3 className='testimonials__subtitle'>
            Estos son los testimonios disponibles de nuestros clientes.
          </h3>
        </div>
        <button type='button' className='testimonials__button'>
          + Nuevo
        </button>
      </header>
      <div class='testimony_list'>
        {names.length === 0 && <TestimonyListEmptyRow />}
        {names.map((name) => (
          <TestimonyListRow name={name} />
        ))}
      </div>
    </div>
  );
}
