import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './loginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from '../Alert';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/userActions';
import Loader from '../loader/Loader';
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const onSubmit = (values) => {
    dispatch(login(values.email, values.password));
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        ErrorAlert('Error', error)
      ) : (
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

            <Button
              variant='primary'
              type='submit'
              className={styles.margin_top}
            >
              Iniciar sesión
            </Button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default LoginForm;
