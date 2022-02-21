import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../css/registerForm.css";

export default function RegisterForm() {
  const [sendForm, setSendForm] = useState(false);

  const initialValuesForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const funcionValidate = (values) => {
    let errorsObject = {};
    validateFirtName(values, errorsObject);
    validateLastName(values, errorsObject);
    validateEmail(values, errorsObject);
    validatePassword(values, errorsObject);
    validateConfirmPassword(values, errorsObject);
    return errorsObject;
  };

  const validateFirtName = (values, errorsObject) => {
    if (!values.firstName) {
      errorsObject.firstName = "Por Favor Ingresa Un Nombre!";
    } else if (!/^[a-zA-Z\s]{3,40}$/.test(values.firstName)) {
      errorsObject.firstName =
        "El nombre solo puede contener letras y minimo 3 caracteres";
    }
    return errorsObject;
  };

  const validateLastName = (values, errorsObject) => {
    if (!values.lastName) {
      errorsObject.lastName = "Por favor ingresa un apellido!";
    } else if (!/^[a-zA-Z\s]{3,40}$/.test(values.lastName)) {
      errorsObject.lastName =
        "El apellido solo puede contener letras y minimo 3 caracteres";
    }
    return errorsObject;
  };

  const validateEmail = (values, errorsObject) => {
    if (!values.email) {
      errorsObject.email = "Por favor ingresa un email!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errorsObject.email = "El email tiene que tener formato correo@correo.com";
    }
    return errorsObject;
  };

  const validatePassword = (values, errorsObject) => {
    if (!values.password) {
      errorsObject.password = "Por favor ingresa un contrasena!";
    } else if (!/^[a-zA-Z0-9\s]{6,40}$/i.test(values.password)) {
      errorsObject.password = "La contrasena debe tener minimo 6 caracteres";
    }
    return errorsObject;
  };

  const validateConfirmPassword = (values, errorsObject) => {
    if (values.password !== values.passwordConfirm) {
      errorsObject.passwordConfirm = "Las contrasenas no coinciden";
    }
    return errorsObject;
  };

  const handleSubmit = (values, resetForm) => {
    resetForm();
    setSendForm(true);
    setTimeout(() => {
      setSendForm(false);
    }, 5000);
  };

  return (
    <div className="container_register">
      <div>
        <h1>Registrate para ser Voluntario!</h1>
      </div>
      <Formik
        initialValues={initialValuesForm}
        validate={funcionValidate}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form>
            {sendForm && <p className="success">Formulario envio con exito!</p>}
            <div className="container_field">
              <label htmlFor="firstName">Nombre</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Pablo"
                className="field"
                required
              />
              <ErrorMessage
                name="firstName"
                component="h6"
                className="color_red without-margin"
              />
            </div>
            <div className="container_field">
              <label htmlFor="lastName">Apellido</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Perez"
                className="field"
                required
              />
              <ErrorMessage
                name="lastName"
                component="h6"
                className="color_red without-margin"
              />
            </div>
            <div className="container_field">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Correo@Correo.com"
                className="field"
                required
              />
              <ErrorMessage
                name="email"
                component="h6"
                className="color_red without-margin"
              />
            </div>
            <div className="container_field">
              <label htmlFor="password">Contraseña</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="******"
                className="field"
                required
              />
              <ErrorMessage
                name="password"
                className="color_red without-margin"
                component="h6"
              />
            </div>
            <div className="container_field">
              <label
                htmlFor="passwordConfirm"
                className="label_confirmpass without-margin"
              >
                Confirmar Contraseña
              </label>
              <Field
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="******"
                className="field"
                required
              />
              <ErrorMessage
                name="passwordConfirm"
                className="color_red without-margin"
                component="h6"
              />
            </div>
            <div className="container_button">
              <button type="submit" className="button">
                Registrarse
              </button>
              <h6 className="without-margin">
                <a href="/login">Si ya estas registrado , Haz Click Aqui</a>
              </h6>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
