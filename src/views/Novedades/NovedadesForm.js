import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Form, Button } from 'react-bootstrap';
import { post, put } from '../../services/apiService';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NovedadesForm.css';

export default function NovedadesForm(news) {
  const { register, handleSubmit, setValue, trigger } = useForm();
  let title = news.news.title == undefined ? 'hola' : news.news.title;
  let content = news.news.content == undefined ? '' : news.news.content;
  let id = news.news.id == undefined ? '' : news.news.id;
  let img = news.news.img == undefined ? '' : news.news.img;

  const onSubmit = async function (data) {
    try {
      if (JSON.stringify(news.news) === '{}') {
        const body = JSON.stringify(data)
        const request = await post(body, '/news');
        console.log(request)
      }
      else {
      }
      const body = JSON.stringify(data)
      const request = await put(body, '/news/' + id);
      console.log(request)
    }
    catch (err) { }
  };

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
              enable={true}
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
};
