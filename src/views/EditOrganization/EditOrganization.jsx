import React from 'react';
import './editOrganization.css';

export default function EditOrganization() {
  return (
    <div className='edit-form mx-auto mt-4'>
      <h3 className='edit-form_heading'>
        Administra los datos de la organización
      </h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='edit-form_input-group'>
          <label
            className='edit-form_label required-field'
            htmlFor='edit-form_name'
          >
            Nombre
          </label>
          <input
            className='edit-form_input edit-form_invalid-input'
            type='text'
            id='edit-form_name'
            name='name'
            placeholder='Somos Más'
          />
          <p className='edit-form_error-msg'>Este campo es obligatorio</p>
        </div>
        <div className='edit-form_input-group'>
          <label
            className='edit-form_label required-field'
            htmlFor='edit-form_logo'
          >
            Logo
          </label>
          <input
            className='edit-form_input edit-form_invalid-input'
            type='text'
            id='edit-form_logo'
            name='logo'
            placeholder='URL del Logo'
          />
          <p className='edit-form_error-msg'>Este campo es obligatorio</p>
        </div>
        <button className='edit-form_btn edit-form_btn-primary'>
          Guardar Cambios
        </button>
        <button className='edit-form_btn edit-form_btn-secondary'>
          Cancelar
        </button>
      </form>
    </div>
  );
}
