import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import style from './testimonyForm.module.css';

export default function TestimonyForm(props) {
  const [testimony, setTestimony] = React.useState(props.testimony || {});
  const [isNew, setIsNew] = React.useState(props.testimony ? false : true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestimony({ ...testimony, [name]: value });
  };

  const handleChangeCKEditor = (event, editor) => {
    const data = editor.getData();
    setTestimony({ ...testimony, content: data });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: Save Testimony
    // isNew ? props.onCreate(testimony) : props.onUpdate(testimony);
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
            value={testimony.name}
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
            name='imageUrl'
            value={testimony.imageUrl}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div className={style.cont_Img}>
            <img
              src={
                props.testimony.imageUrl
                  ? testimony.imageUrl
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
            data={testimony.content}
            name='content'
            onChange={(e, editor) => handleChangeCKEditor(e, editor)}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-outline-primary m-auto'>
            <span className={style.btn_submit}>Guardar</span>
          </button>
        </div>
      </form>
    </div>
  );
}

// import React from 'react';
// import Slider from '../Slider/Slider';
// import './home.css';
// import TestimonyForm from '../TestimonyForm/TestimonyForm';
// import RegisterForm from './../../Componets/Auth/RegisterForm';
// function Home() {
//   const dataSlide = [
//     {
//       imageUrl:
//         'https://images.unsplash.com/photo-1605457867610-e990b192418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80',
//       text: 'Slide uno',
//     },
//     {
//       imageUrl:
//         'https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       text: 'Slide 2',
//     },
//     {
//       imageUrl:
//         'https://images.unsplash.com/photo-1513972400628-4ae6371f9124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       text: '',
//     },
//   ];

//   // testimoni object test
//   const testimony = {
//     name: 'nameTest',
//     imageUrl: 'https://i.blogs.es/ddcf9a/critica-chicos-buenos/1366_2000.jpeg',
//     content:
//       "'Chicos buenos', la preadolescencia transformada en una de las comedias más divertidas del año",
//   };

//   return (
//     <div id='home'>
//       <TestimonyForm testimony={testimony} />
//       <RegisterForm />
//       <Slider data={dataSlide} />
//     </div>
//   );
// }

// export default Home;
