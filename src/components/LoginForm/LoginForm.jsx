import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './loginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { post } from '../../services/apiService';

const LoginForm = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const validateEmail = (values, errors) => {
    const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values.email) {
      errors.email = 'El email es requerido';
    } else if (!regExEmail.test(values.email)) {
      errors.email = 'Debes introducir un email valido';
    }

    return errors;
  };

  const validatePassword = (values, errors) => {
    if (!values.password) {
      errors.password = 'La contraseña es requerida';
    } else if (values.password.length < 6) {
      errors.password = 'La contraseña debe tener más de 6 caracteres';
    }

    return errors;
  };

  const validate = (values) => {
    const errors = {};

    validateEmail(values, errors);
    validatePassword(values, errors);

    return errors;
  };

  const onSubmit = async (values) => {
    const url = 'http://localhost:3000/users/auth/login';
    const {error, data} = await post(url);
    if(error){
      MySwal.fire({
        icon: 'error',
        title: <p>Ocurrio un error</p>,
        didOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>Vuelve a intentarlo</p>)
      })
    }else{
      navigate('/');
    }
    
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className={styles.form}>
          <h2>Iniciar sesión</h2>

          <label className={styles.margin_top}>Email</label>
          <Field
            className={styles.input}
            type='email'
            name='email'
            placeholder='Introduzca su Email'
          />
          <ErrorMessage name='email'>
            {(message) => <small className={styles.error}>{message}</small>}
          </ErrorMessage>

          <label className={styles.margin_top}>Contraseña</label>
          <Field
            className={styles.input}
            type='password'
            name='password'
            placeholder='Introduzca su contraseña'
          />
          <ErrorMessage name='password'>
            {(message) => <small className={styles.error}>{message}</small>}
          </ErrorMessage>

          <Button variant='primary' type='submit' className={styles.margin_top}>
            Iniciar sesión
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
