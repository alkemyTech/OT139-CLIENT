import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Card, Alert } from 'react-bootstrap';

export default function HomeSlidesFormEdit() {
  const [arrayImgState, setArrayImgState] = useState([]);
  const SLIDES_MAX = 3;

  const initialValuesForm = {
    img: '',
    textImg: '',
  };

  const validateImg = (values, errors) => {
    if (!values.img) {
      errors.img = 'La imagen es Obligatoria!';
    }

    return errors;
  };

  const validateText = (values, errors) => {
    if (!values.textImg) {
      errors.textImg = 'Por Favor Ingresa Un Texto para la Imagen!';
    }

    return errors;
  };

  const validateField = (values) => {
    const errors = {};

    validateImg(values, errors);
    validateText(values, errors);

    return errors;
  };

  const addImg = (values, resetForm) => {
    const arrayImg = [];

    arrayImg.push(values);
    const newArrayImg = arrayImg.concat(arrayImgState);
    resetForm();

    return setArrayImgState(newArrayImg);
  };

  const imgDelete = (index) => {
    const newArray = arrayImgState.filter((value, pos) => pos !== index);
    return setArrayImgState(newArray);
  };

  const handleSubmitImg = () => {};

  return (
    <div>
      <h3 className='mt-2'>Edicion de Imagenes</h3>
      <Formik
        initialValues={initialValuesForm}
        validate={validateField}
        onSubmit={(values, { resetForm }) => addImg(values, resetForm)}
      >
        {() => (
          <Form>
            <div className='container_field d-flex flex-column ms-2'>
              <div>
                <Field
                  id='img'
                  name='img'
                  type='text'
                  placeholder='http:// de la imagen'
                  className='field me-2 mb-2 mt-2 w-100'
                />
                <ErrorMessage name='img' component='h6' className='color_red' />
              </div>
              <div>
                <Field
                  id='textImg'
                  name='textImg'
                  type='text'
                  placeholder='Texto de la Imagen'
                  className='field mb-2 mt-2 w-100'
                />
                <ErrorMessage
                  name='textImg'
                  component='h6'
                  className='color_red'
                />
              </div>
              <div className='mb-3'>
                {arrayImgState.length === SLIDES_MAX ? (
                  <Alert variant='danger'>
                    Ya Hay Tres Imagenes, Borre Alguna para Continuar Agregando
                  </Alert>
                ) : (
                  <Button type='submit' className='button_style mt-2 w-50'>
                    Agregar Imagen
                  </Button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className='mt-3 border background_gray'>
        <h3 className='mt-2'>Imagenes Cargadas</h3>
        {!arrayImgState.length && (
          <Alert variant='danger'>NO HAY IMAGENES CARGADAS</Alert>
        )}
        <div className='d-flex justify-content-center'>
          {arrayImgState.map((image, index) => (
            <Card className='m-2' key={index}>
              <Card.Img variant='top' src={image.img} />
              <Card.Body className='background_yellow'>
                <Card.Title className='text-start'>{image.textImg}</Card.Title>
              </Card.Body>
              <div className='text-center'>
                <Button
                  className='m-2 w-75'
                  variant='danger'
                  onClick={() => imgDelete(index)}
                >
                  Eliminar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className='mt-2 background_blue'>
        <Button
          type='button'
          onClick={() => handleSubmitImg()}
          className='mt-4 w-75 button_style mb-5'
        >
          Terminar Edicion de Imagenes
        </Button>
      </div>
    </div>
  );
}
