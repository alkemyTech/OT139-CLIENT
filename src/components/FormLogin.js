import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import styles from './FormLogin.module.css';
import {withFormik, Field, ErrorMessage} from 'formik'


const FormLogin = (props) => {
     const {handleSubmit, isSubmitting, isValid} = props

    return (
        <div className={styles.container}>
            <Form onSubmit={handleSubmit} className={styles.form}>

                <Form.Group className={styles.group} controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Field 
                        className={styles.input}
                        type="email"
                        name="email" 
                        placeholder="Introduzca su Email" />
                       <ErrorMessage name="email">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>
                </Form.Group>

                <Form.Group className={styles.group} controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Field 
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Introduzca su contraseña" />
                        <ErrorMessage name="password">
                           {message => <small className={styles.error}>{message}</small>}
                       </ErrorMessage>
                </Form.Group>

                <Button 
                    disabled={isSubmitting || !isValid}
                    variant="primary" 
                    type="submit"
                    >

                    Iniciar sesión
                </Button>

            </Form>
        </div>
    );
}

export default withFormik({
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
})(FormLogin);