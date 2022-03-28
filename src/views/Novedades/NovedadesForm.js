import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Logo from '../../img/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NovedadesForm.css';

export default function NovedadesForm(news) {
  const { register, handleSubmit, setValue, trigger } = useForm();
  const [dataNews, setData] = useState([]);
  let method = '';
  let url = '';

  if (news) {
    method = 'POST';
    url = 'http://localhost:8000/news/news';
  } else {
    console.log(news);
    url = `http://localhost:8000/news/${news.id}`;
    method = 'PATCH';
    setData(news);
    console.log(news.news.title)
  }
console.log(news)
  const onSubmit = async function (data) {
    try {
      console.log(data);
      const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, requestOptions);
      console.log(response.status);
    } catch (err) {}
  };

  useEffect(() => {
    register('content');
  });

  return (
    <div className='main'>
      <div className='Novedades_Form animate__animated animate__fadeInLeft '>
        <img src={Logo} className='Logo' />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>Crear Novedades</h2>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type='text'
              placeholder=''
              required
              {...register('title')}
              value={`${dataNews.title}`}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='file' {...register('imageUrl')} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Contenido</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data='<p>Hello from CKEditor 5!</p>'
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                setValue('content', editor.getData());
                trigger('content');
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log(event);
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label='Default select example'
              required
              {...register('categoryId')}
            >
              <option value='news'>News</option>
            </Form.Select>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};
