import React from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Form, Button } from 'react-bootstrap';
import { post, put } from '../../services/apiService';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './NewsForm.css';

export default function NewsForm({ news }) {
  const { register, handleSubmit, setValue, trigger } = useForm();

  const onSubmit = async function (data) {
    try {
      if (Object.keys(news).length === 0) {
        const body = JSON.stringify(data)
        await post(body, '/news');
      }
      else {
        const body = JSON.stringify(data)
        await put(body, '/news/' + news.id);
      }
    }
    catch (err) { alert(err); }
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
              value={news.title}
              {...register('title')}
              name='title'
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
              data={() => { return news.content ? '' : news.content }}
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
