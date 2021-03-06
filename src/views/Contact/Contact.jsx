import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Logo from './Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import { ErrorAlert, SuccessAlert } from '../../components/Alert';
import Loader from '../../components/loader/Loader';

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const contactAdd = useSelector((state) => state.contactAdd);
  const { loading, success, error } = contactAdd;

  useEffect(() => {
    if (success) {
      SuccessAlert('Mensaje Enviado', 'Gracias por contactarnos');
    }
  }, [success]);
  const onSubmit = (data) => {
    dispatch(addContact(data.firstName, data.email, data.message));
  };

  return (
    <div className='main'>
      {loading ? (
        <Loader />
      ) : error ? (
        ErrorAlert('Error al enviar mensaje', error)
      ) : (
        <>
          <div className='flex-child animate__animated animate__fadeInLeft '>
            <img src={Logo} className='Logo' alt='logo' />
            <p className='text-center'>
              Si estas interesado en ser voluntario de nuestra comunidad o
              simplemente dar apoyo economicamente, No dudes en contactarte con
              nosotros. {`\u{1F60A}`}
            </p>
          </div>
          <div className='Form-Contact flex-child animate__animated animate__fadeInRight'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h2 className='text-center'>¡Envianos Un Mensaje!</h2>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='example Marie Curie'
                  required
                  {...register('firstName')}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='name@example.com'
                  required
                  {...register('email')}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={6}
                  required
                  {...register('message')}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Enviar
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}
