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
  const [testimonyData, setTestimony] = useState(props.testimony);
  const [isNew, setIsNew] = useState(!testimonyData.id ? true : false);
  console.log({
    testimonyData,
    isNew,
  });

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

    if (isNew) {
      async function create() {
        try {
          const response = await createTestimony(testimonyData);
          response.data
            ? SuccessAlert('Creado con exito')
            : ErrorAlert(response.data.msg + 'err');
        } catch (error) {
          ErrorAlert('Algo salio mal: no se creo');
        }
      }
      create();
    } else {
      async function update() {
        try {
          const response = await updateTestimony(
            testimonyData.id,
            testimonyData
          );

          response.data
            ? SuccessAlert(response.data.msg)
            : ErrorAlert(response.data.msg + 'err');
        } catch (error) {
          ErrorAlert('Algo salio mal: no se actualizo');
        }
      }
      update();
    }
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
              src={
                props.testimony?.image
                  ? testimonyData.image
                  : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
              }
              alt='...'
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
