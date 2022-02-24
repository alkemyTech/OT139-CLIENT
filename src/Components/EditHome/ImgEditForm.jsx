import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Card, Alert } from "react-bootstrap";
import "./formEditHome.css";

export default function ImgEditForm() {
  const [arrayImgState, setArrayImgState] = useState([]);

  const initialValuesForm = {
    img: "",
    textImg: "",
  };

  const validateImg = (values, errorsObject) => {
    if (!values.img) {
      errorsObject.img = "La imagen es Obligatoria!";
    }
    return errorsObject;
  };

  const validateText = (values, errorsObject) => {
    if (!values.textImg) {
      errorsObject.textImg = "Por Favor Ingresa Un Texto para la Imagen!";
    }
    return errorsObject;
  };

  const validateField = (values) => {
    let errorsObject = {};
    validateImg(values, errorsObject);
    validateText(values, errorsObject);
    return errorsObject;
  };

  const addImg = (values, resetForm) => {
    const arrayImg = [];
    arrayImg.push(values);
    const newArrayImg = arrayImg.concat(arrayImgState);
    resetForm();
    return setArrayImgState(newArrayImg);
  };

  const ImgDelete = (index) => {
    const newArray = arrayImgState.filter((value, pos) => pos !== index);
    return setArrayImgState(newArray);
  };

  const handleSubmitImg = () => {};

  return (
    <div>
      {arrayImgState.length === 3 && (
        <Alert variant="danger">
          Ya Hay Tres Imagenes, Borre Alguna para Continuar Agregando
        </Alert>
      )}
      <Formik
        initialValues={initialValuesForm}
        validate={validateField}
        onSubmit={(values, { resetForm }) => addImg(values, resetForm)}
      >
        {() => (
          <Form>
            <div className="container_field d-flex flex-column ms-2">
              <div>
                <Field
                  id="img"
                  name="img"
                  type="text"
                  placeholder="http:// de la imagen"
                  className="field me-2 mb-2 mt-2 w-100"
                />
                <ErrorMessage name="img" component="h6" className="color_red" />
              </div>
              <div>
                <Field
                  id="textImg"
                  name="textImg"
                  type="text"
                  placeholder="Texto de la Imagen"
                  className="field mb-2 mt-2 w-100"
                />
                <ErrorMessage
                  name="textImg"
                  component="h6"
                  className="color_red"
                />
              </div>
              <div className="mb-3">
                <Button type="submit" className="button_style mt-2 w-50">
                  Agregar Imagen
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="mt-3 border background_gray">
        <h3 className="mt-2">Imagenes Cargadas</h3>
        {arrayImgState.length === 0 && (
          <Alert variant="danger">NO HAY IMAGENES CARGADAS</Alert>
        )}
        <div className="d-flex justify-content-center">
          {arrayImgState.map((image, index) => (
            <Card className="m-2" key={index}>
              <Card.Img variant="top" src={image.img} />
              <Card.Body className='color_card'>
                <Card.Title className="text-start">{image.textImg}</Card.Title>
              </Card.Body>
              <div className="text-center color_card">
                <Button
                  className="m-2 w-75"
                  variant="danger"
                  onClick={() => ImgDelete(index)}
                >
                  Eliminar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-2 background_blue">
        <Button
          type="button"
          onClick={() => handleSubmitImg()}
          className="mt-4 w-75 button_style mb-5"
        >
          Terminar Edicion de Imagenes
        </Button>
      </div>
    </div>
  );
}
