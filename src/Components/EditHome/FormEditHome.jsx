import React, { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import "./formEditHome.css";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Alert,
  Card,
} from "react-bootstrap";

export default function FormEditHome() {
  const [inputEdit, setInputEdit] = useState({});
  const [arrayImgState, setArrayImgState] = useState([]);
  const [validated, setValidated] = useState(false);
  const [validatedImg, setValidatedImg] = useState(false);
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const functionSetAlerts = () => {
    setTimeout(() => {
      setAlert("");
      setAlertSuccess("");
    }, 8000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const input = { ...inputEdit, [name]: value };
    setInputEdit(input);
  };

  const handleSubmitTitle = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    form.reset();
    setValidated(false);
  };

  const addImg = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidatedImg(true);
    if (form.checkValidity() === false) {
      return e.stopPropagation();
    }
    const arrayImg = [];
    if (arrayImgState.length === 3) {
      return setAlert("Ya hay 3 imagenes cargadas, Elimine una para continuar");
    }
    form.reset();
    setValidatedImg(false);
    arrayImg.push(inputEdit);
    const newArrayImg = arrayImg.concat(arrayImgState);
    setArrayImgState(newArrayImg);
    functionSetAlerts();
  };

  const ImgDelete = (index) => {
    const newArray = arrayImgState.filter((value, pos) => pos !== index);
    return setArrayImgState(newArray);
  };

  const handleSubmitImg = () => {
    console.log(arrayImgState.length);
    // submit image Form here method post
    if (arrayImgState.length === 0) {
      return setAlert("No hay Imagenes Cargadas");
    } else if (arrayImgState.length !== 3) {
      return setAlert("No hay Suficientes Imagenes");
    }
    setAlertSuccess("Fotos de Home Modificadas Exitosamente!");
    functionSetAlerts();
  };

  return (
    <div className="mx-auto my-auto container-view">
      <h1 className="text-center">Edicion de Home</h1>
      <Form
        onSubmit={(event) => handleSubmitTitle(event)}
        className="d-flex flex-column border mb-3 container_img"
        noValidate
        validated={validated}
      >
        <h3 className="mt-2">Edicion del Texto de Bienvenida</h3>
        <InputGroup className="ms-2 mt-2 width_textarea">
          <InputGroup.Text className="p-1">
            Texto de Bienvenida:
          </InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            name="title"
            className="height_max_textarea"
            onChange={(e) => handleChange(e)}
            maxLength={100}
            minLength={20}
            required
          />
          <Form.Control.Feedback>OK!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            El titulo debe tener al menos 20 caracteres y es obligatorio
          </Form.Control.Feedback>
        </InputGroup>
        <div className="mb-2">
          <Button type="submit" className="mt-3 w-50 button_style">
            Actualizar Texto de Bienvenida
          </Button>
        </div>
      </Form>
      {alert && <Alert variant="danger">{alert}</Alert>}
      {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
      <Form onSubmit={(e) => addImg(e)} noValidate validated={validatedImg}>
        <div className="container_img d-flex border ">
          <h3 className="mt-2">Edicion de Imagenes</h3>
          <div className="d-flex flex_column">
            <InputGroup className="my-3 mx-1 width_50 width_100">
              <InputGroup.Text id="inputGroup-sizing-default" className="p-1">
                https:// de Imagen:
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="img"
                onChange={(e) => handleChange(e)}
                required
              />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Es obligatoria la Imagen
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3 mt-3 width_50 me-2 width_100">
              <InputGroup.Text id="inputGroup-sizing-default" className="p-1">
                Titulo Imagen:
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="text"
                onChange={(e) => handleChange(e)}
                required
              />
              <Form.Control.Feedback>OK!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Es obligatorio el texto de imagen
              </Form.Control.Feedback>
            </InputGroup>
          </div>
          <div className="mb-2">
            <Button type="submit" className="mt-2 w-50 button_style">
              Agregar Imagen
            </Button>
          </div>
        </div>
      </Form>
      <div>
        <Button
          type="button"
          onClick={() => handleSubmitImg()}
          className="mt-2 w-75 button_style"
        >
          Terminar Edicion de Imagenes
        </Button>
      </div>
      <div className="mt-3 border background_gray">
        <h3 className="mt-2">Imagenes Cargadas</h3>
        {arrayImgState.length === 0 && (
          <Alert variant="danger">NO HAY IMAGENES CARGADAS</Alert>
        )}
        <div className="d-flex justify-content-center">
          {arrayImgState.map((image, index) => (
            <Card className="m-2" key={index}>
              <Card.Img variant="top" src={image.img} />
              <Card.Body>
                <Card.Title className="text-start">{image.text}</Card.Title>
              </Card.Body>
              <div className="text-center">
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
      <div className="border mt-3 mb-5 background_gray">
        <h3 className="mt-2">Vista Previa Sliders</h3>
        {arrayImgState.length === 0 && (
          <Alert variant="danger">NO HAY IMAGENES CARGADAS</Alert>
        )}
        <CarouselComponent arrayImgState={arrayImgState} />
      </div>
    </div>
  );
}
