import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import "./homeFormEdit.css";

export default function HomeTitleFormEdit() {
  const initialValuesForm = {
    title: "",
  };

  const validateTitle = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Por Favor Ingresa Un Titulo!";
    } else if (!/^[\s\S]{20,70}$/.test(values.title)) {
      errors.title = "El titulo tiene que tener minimo 20 caracteres!";
    }
    
    return errors;
  };

  const handleSubmit = (values, resetForm) => {
      resetForm();
  };

  return (
    <div className="ms-2">
      <h3>Edicion de Titulo de Bienvenida</h3>
      <Formik
        initialValues={initialValuesForm}
        validate={validateTitle}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form>
            <div className="container_field d-flex flex-column">
              <Field
                id="title"
                name="title"
                type="textarea"
                placeholder="  Titulo de bienvenida"
                className="field me-2 mb-2 mt-2"
              />
              <ErrorMessage
                name="title"
                component="h6"
              />
              <div>
                <Button type="submit" className="button_style mt-2 w-50">
                  Actualizar Titulo
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
