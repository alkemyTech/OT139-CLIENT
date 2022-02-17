import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../css/RegisterForm.css";

export default function RegisterForm() {
  const [sendForm, setSendForm] = useState(false);
  return (
    <div className="conteiner-register">
      <div>
        <h1>Registrate para ser Voluntario!</h1>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.firstName) {
            errors.firstName = "Por Favor Ingresa Un Nombre!";
          } else if (!/^[a-zA-Z\s]{3,40}$/.test(values.firstName)) {
            errors.firstName =
              "El nombre solo puede contener letras y minimo 3 caracteres";
          }
          if (!values.lastName) {
            errors.lastName = "Por favor ingresa un apellido!";
          } else if (!/^[a-zA-Z\s]{3,40}$/.test(values.lastName)) {
            errors.lastName =
              "El apellido solo puede contener letras y minimo 3 caracteres";
          }
          if (!values.email) {
            errors.email = "Por favor ingresa un email!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "El email tiene que tener formato correo@correo.com";
          }
          if (!values.password) {
            errors.password = "Por favor ingresa un contrasena!";
          } else if (!/^[a-zA-Z0-9\s]{6,40}$/i.test(values.password)) {
            errors.password = "La contrasena debe tener minimo 6 caracteres";
          }
          if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = "Las contrasenas no coinciden";
          }
          return errors;
        }}
        onSubmit={(value, { resetForm }) => {
          resetForm();
          console.log(value);
          setSendForm(true);
          setTimeout(() => {
            setSendForm(false);
          }, 5000);
        }}
      >
        {({ errors }) => (
          <Form>
            {sendForm && <p className="exito">Formulario envio con exito!</p>}
            <div className="conteiner-field">
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
                component={() => <h6 className="error">{errors.firstName}</h6>}
              />
            </div>
            <div className="conteiner-field">
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
                component={() => <h6 className="error">{errors.lastName}</h6>}
              />
            </div>
            <div className="conteiner-field">
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
                component={() => <h6 className="error">{errors.email}</h6>}
              />
            </div>
            <div className="conteiner-field">
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
                component={() => <h6 className="error">{errors.password}</h6>}
              />
            </div>
            <div className="conteiner-field">
              <label htmlFor="passwordConfirm" className="label-ConfirmPass">
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
                component={() => (
                  <h6 className="error">{errors.passwordConfirm}</h6>
                )}
              />
            </div>
            <div className="conteiner-button">
              <button type="submit" className="button">
                Registrarse
              </button>
              <h6>
                <a href="/login">Si ya estas registrado , Haz Click Aqui</a>
              </h6>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
