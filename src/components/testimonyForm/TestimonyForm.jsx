import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import style from './testimonyForm.module.css';

export default function TestimonyForm(props) {
  const [testimony, setTestimony] = React.useState('');

  return (
    <div className={style.container}>
      <h2>Testimonios</h2>
      <label htmlFor='testimony'>Nombre</label>
      <input type='text' id='testimony' name='testimony' placeholder='Nombre' />

      <CKEditor
        editor={ClassicEditor}
        data='<p>Hello from CKEditor 5!</p>'
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

// import React from 'react';
// import Slider from '../Slider/Slider';
// import './home.css';
// import TestimonyForm from '../testimonyForm/TestimonyForm';
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

//   return (
//     <div id='home'>
//       <TestimonyForm />
//       <RegisterForm />
//       <Slider data={dataSlide} />
//     </div>
//   );
// }

// export default Home;
