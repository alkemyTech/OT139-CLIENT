import React from 'react'
import '../TestimonyListRow/testimonyListRow.css';
import './testimonyListEmptyRow.css';

export default function TestimonyListEmptyRow() {
  return (
    <div className='testimony_list_row'>
      <div className='testimony_list_row__disabled_text'>
        No hay testimonios disponibles en este momento.
      </div>
    </div>
  )
}
