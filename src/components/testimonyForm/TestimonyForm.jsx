import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import style from './testimonyForm.module.css';
import {
  updateTestimony,
  createTestimony,
} from '../../services/testimonyService';
import { ErrorAlert, SuccessAlert } from '../Alert';

export default function TestimonyForm(props) {
  const [testimonyData, setTestimony] = useState(props.testimony || {});
  const defaultImageToForm =
    'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestimony({ ...testimonyData, [name]: value });
  };

  const handleChangeCKEditor = (event, editor) => {
    const data = editor.getData();
    setTestimony({ ...testimonyData, content: data });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function create() {
      if (!testimonyData.name || !testimonyData.content) {
        return ErrorAlert('Todos los campos son obligatorios');
      }
      try {
        const response = await createTestimony(testimonyData);
        response.data
          ? SuccessAlert('Creado con exito')
          : ErrorAlert('Error al crear');
      } catch (error) {
        ErrorAlert('Algo salio mal: no se creo');
      }
      props.closeForm();
    }

    async function update() {
      try {
        const response = await updateTestimony(testimonyData.id, testimonyData);

        response.data
          ? SuccessAlert(response.data.msg)
          : ErrorAlert('Error al actualizar');
      } catch (error) {
        ErrorAlert('Algo salio mal: no se actualizo');
      }
      props.closeForm();
    }

    testimonyData.id ? update() : create();
  };

  return (
    <div className={style.container}>
      <form
        className='border border-primary rounded mt-3 p-5 pt-3'
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <label>Nombre</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={testimonyData.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className='form-group py-3'>
          <label>Imagen</label>
          <input
            type='text'
            className='form-control'
            name='image'
            value={testimonyData.image}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div className={style.cont_img}>
            <img
              src={testimonyData.image || defaultImageToForm}
              alt='muestra de imagen'
              className='rounded'
            ></img>
          </div>
        </div>

        <div className='form-group py-3'>
          <label>Descripcion</label>
          <CKEditor
            className={style.ckeditor}
            editor={ClassicEditor}
            data={testimonyData.content}
            name='content'
            onChange={(e, editor) => handleChangeCKEditor(e, editor)}
          />
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <button type='submit' className='btn btn-outline-primary m-auto'>
            <span className={style.btn_submit}>Guardar</span>
          </button>
        </div>
      </form>
    </div>
  );
}
