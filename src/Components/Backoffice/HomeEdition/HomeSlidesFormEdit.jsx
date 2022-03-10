import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Card, Alert } from 'react-bootstrap';
import { ErrorAlert } from '../../Alert/index';

export default function HomeSlidesFormEdit() {
  const [arraySlideState, setArraySlideState] = useState([]);
  const SLIDES_MAX = 3;

  const initialValuesForm = {
    slide: '',
    textSlide: '',
  };

  const validateSlide = (values, errors) => {
    if (!values.slide) {
      errors.slide = 'La imagen es Obligatoria!';
    }

    return errors;
  };

  const validateText = (values, errors) => {
    if (!values.textSlide) {
      errors.textSlide = 'Por Favor Ingresa Un Texto para la Imagen!';
    }

    return errors;
  };

  const validateField = (values) => {
    const errors = {};

    validateSlide(values, errors);
    validateText(values, errors);

    return errors;
  };

  const addSlide = (values, resetForm) => {
    const arraySlide = [];
    const errorTitle = 'Ya hay 3 imagenes cargadas!';
    const errorText = 'Alcanzo el limites de imagenes, Borre una para continuar';

    if (arraySlideState.length === SLIDES_MAX) {
       return ErrorAlert(errorTitle, errorText);
    }
    
    arraySlide.push(values);
    const newArraySlide = arraySlide.concat(arraySlideState);
    resetForm();

    return setArraySlideState(newArraySlide);
  };

  const deleteSlide = (index) => {
    const newArray = arraySlideState.filter((value, pos) => pos !== index);
    return setArraySlideState(newArray);
  };

  return (
    <div>
      <h3 className='mt-2'>Edicion de Imagenes</h3>
      <Formik
        initialValues={initialValuesForm}
        validate={validateField}
        onSubmit={(values, { resetForm }) => addSlide(values, resetForm)}
      >
        {() => (
          <Form>
            <div className='container_field d-flex flex-column ms-2'>
              <div>
                <Field
                  id='slide'
                  name='slide'
                  type='text'
                  placeholder='http:// de la imagen'
                  className='field me-2 mb-2 mt-2 w-100'
                />
                <ErrorMessage
                  name='slide'
                  component='h6'
                  className='color_red'
                />
              </div>
              <div>
                <Field
                  id='textSlide'
                  name='textSlide'
                  type='text'
                  placeholder='Texto de la Imagen'
                  className='field mb-2 mt-2 w-100'
                />
                <ErrorMessage
                  name='textSlide'
                  component='h6'
                  className='color_red'
                />
              </div>
              <div className='mb-3'>
                <Button type='submit' className='button_style mt-2 w-50'>
                  Agregar Imagen
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className='mt-3 border background_gray'>
        <h3 className='mt-2'>Imagenes Cargadas</h3>
        {!arraySlideState.length && (
          <Alert variant='danger'>NO HAY IMAGENES CARGADAS</Alert>
        )}
        <div className='d-flex justify-content-center'>
          {arraySlideState.map((image, index) => (
            <Card className='m-2' key={index}>
              <Card.Img variant='top' src={image.slide} />
              <Card.Body className='background_yellow'>
                <Card.Title className='text-start'>
                  {image.textSlide}
                </Card.Title>
              </Card.Body>
              <div className='text-center'>
                <Button
                  className='m-2 w-75'
                  variant='danger'
                  onClick={() => deleteSlide(index)}
                >
                  Eliminar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className='mt-2 background_blue'>
        <Button type='button' className='mt-4 w-75 button_style mb-5'>
          Terminar Edicion de Imagenes
        </Button>
      </div>
    </div>
  );
}
