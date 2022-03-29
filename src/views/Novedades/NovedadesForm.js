import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Form, Button } from 'react-bootstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NovedadesForm.css';

export default function NovedadesForm(news) {
  const { register, handleSubmit, setValue, trigger } = useForm();
  let method = '';
  let url = '';
  let title = '';
  let content = '';
  let imageUrl = '';
  let id = '';

  if (JSON.stringify(news.news) === '{}') {
    method = 'POST';
    //url = 'http://localhost:8000/news/news'; it's a example
  } else {
    id = news.news.id;
    title = news.news.title;
    content = news.news.content;
    imageUrl = news.news.imageUrl;
    //url = `http://localhost:8000/news/${id}`; it's a example
    method = 'PATCH';
  }

  const onSubmit = async function (data) {
    try {
      const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify(data),
      };
      await fetch(url, requestOptions);
    } catch (err) {}
  };

  useEffect(() => {
    register('content');
  });

  return (
    <div className='main'>
      <div className='Novedades_Form animate__animated animate__fadeInLeft'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>Crear Novedades</h2>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type='text'
              placeholder=''
              required
              value={title}
              {...register('title')}
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
              data={`${content}`}
              onChange={(event, editor) => {
                setValue('content', editor.getData());
                trigger('content');
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
}
