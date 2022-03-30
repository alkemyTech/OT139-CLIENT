import React from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Form, Button } from 'react-bootstrap';
import { post, put } from '../../../services/apiService';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


export default function ActivitiesForm({ activities }) {
  const { register, handleSubmit, setValue, trigger } = useForm();

  const onSubmit = async function (data) {
    try {
      if (Object.keys(activities).length === 0) {
        const body = JSON.stringify(data)
        await post(body, '/activities');
      }
      else {
        const body = JSON.stringify(data)
        await put(body, '/activities/' + activities.id);
      }
    }
    catch (err) { alert(err); }
  };

  return (
    <div className='main'>
      <div className='Activities_Form animate__animated animate__fadeInLeft'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>Actividades</h2>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder=''
              required
              value={activities.name}
              {...register('title')}
              name='title'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Contenido</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={() => { return activities.content ? '' : activities.content }}
              onChange={(event, editor) => {
                setValue('content', editor.getData());
                trigger('content');
              }}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};
