import React from 'react';
import './testimonyListRow.css';

export default function TestimonyListRow({ name }) {
  return (
    <div className='testimony_list_row'>
      <div className='testimony_list_row__name'>{name}</div>
      <div className='testimony_list_row__action_buttons'>
        <button type='button' className='testimony_list_row__button'>
          <i className='fa-solid fa-pencil'></i>
        </button> 
        <button type='button' className='testimony_list_row__button'>
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </div>
  );
}
