import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './loginForm.module.css';
import { Formik,Form,  Field, ErrorMessage } from 'formik';

const LoginForm = (props) => {
   /*  const {isSubmitting, isValid} = props  */

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    let regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    let errors = {};

                    if (!values.email) {
                        errors.email = "El email es requerido";
                    } else if (!regExEmail.test(values.email)) {
                        errors.email = "Debes introducir un email valido";
                    }
                    if (!values.password) {
                        errors.password = "La contraseña es requerida";
                    } else if (values.password.length < 6) {
                        errors.password = "La contraseña debe tener más de 6 caracteres";
                    }
                    return errors
                }}
                onSubmit={(values, /* { setSubmitting } */) => {
                    let usuario = {
                        email: values.email,
                        password: values.password
                    }
                    /* formikBag.setSubmitting(false); */
                    console.log(usuario);
                  }}
            >
                <Form className={styles.form}>
                        <h2>Iniciar sesión</h2>

                        <label className={styles.margin_top}>Email</label>
                        <Field 
                        className={styles.input}
                        type="email"
                        name="email" 
                        placeholder="Introduzca su Email" />
                       {<ErrorMessage component="div" name="email"/> && <ErrorMessage name="email">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>}
                    

                   
                        <label className={styles.margin_top}>Contraseña</label>
                        <Field 
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Introduzca su contraseña" />
                        {<ErrorMessage name="password"/> && <ErrorMessage name="password">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>}

                    <Button
                       /*  disabled={isSubmitting || !isValid} */
                        variant="primary"
                        type="submit"
                        className={styles.margin_top}
                    >
                        Iniciar sesión
                    </Button>

                </Form>

            </Formik>
        </div>
    );
}

export default LoginForm;