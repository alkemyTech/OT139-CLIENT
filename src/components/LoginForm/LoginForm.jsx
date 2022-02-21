import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from './loginForm.module.css';
import { Formik,Form,  Field, ErrorMessage } from 'formik';

const LoginForm = (props) => {
    const {isSubmitting, isValid} = props 

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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
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
                        disabled={isSubmitting || !isValid}
                        variant="primary"
                        type="submit"
                        className={styles.margin_top}
                    >
                        Iniciar sesión
                    </Button>

                </Form>

            </Formik>
            {/*  <Form  onSubmit={handleSubmit}  className={styles.form}>

                <Form.Group className={styles.group} controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Field 
                        className={styles.input}
                        type="email"
                        name="email" 
                        placeholder="Introduzca su Email" />
                       {<ErrorMessage name="email"/> && <ErrorMessage name="email">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>}
                </Form.Group>

                <Form.Group className={styles.group} controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Field 
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Introduzca su contraseña" />
                        {<ErrorMessage name="password"/> && <ErrorMessage name="password">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>}
                        
                </Form.Group>

                <Button 
                     disabled={isSubmitting || !isValid} 
                    variant="primary" 
                    type="submit"
                    >
                    Iniciar sesión
                </Button>

            </Form> */}
        </div>
    );
}

export default LoginForm /* withFormik({
    mapPropsToValues(props){
        return{
            email: '',
            password: ''
        }
    },

    validate(values){
        let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
        const errors = {};

            if(!values.email){
                errors.email = "El email es requerido";
            } else if(!regExEmail.test(values.email)){
                errors.email = "Debes introducir un email valido";
            }
            if(!values.password){
                errors.password = "La contraseña es requerida";
            }else if(values.password.length < 6){
                errors.password = "La contraseña debe tener más de 6 caracteres";
            }
        
        return errors;
    },

    handleSubmit(values, formikBag){
        let usuario = {
            email: values.email,
            password: values.password
        }
        formikBag.setSubmitting(false);
        console.log(usuario);
    }
})(LoginForm); */