import React, { useState } from "react";
import "./FormEditHome.css";
import CarouselComponent from "./CarouselComponent";
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
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const input = { ...inputEdit, [name]: value };
    setInputEdit(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (arrayImgState.length === 3) {
      return setAlert("Ya hay 3 imagenes cargadas, Elimine una para continuar");
    }
    const arrayImg = [];
    arrayImg.push(inputEdit);
    const newArrayImg = arrayImg.concat(arrayImgState);
    setArrayImgState(newArrayImg);
    form.reset();
    setTimeout(() => {
      setAlert("");
    }, 8000);
  };

  return (
    <div className="w-75 mx-auto my-auto">
      <h1 className="text-center">Editar inicio</h1>
      <Form className="d-flex flex-column border mb-3">
        <h3 className="mt-2">Edicion del Titulo de Bienvenida</h3>
        <InputGroup className="ms-2 mt-2">
          <InputGroup.Text>Titulo de Bienvenida</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            name="title"
            onChange={(e) => handleChange(e)}
            maxLength={100}
            minLength={20}
            required
          />
        </InputGroup>
        <div className="mb-2">
          <Button type="submit" className="mt-3 w-50">
            Editar Titulo
          </Button>
        </div>
      </Form>
      {alert && <Alert variant="danger">{alert}</Alert>}
      {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="conteiner-img d-flex border mt-2">
          <InputGroup className="mb-3 mt-3 w-50 me-2 ms-2">
            <InputGroup.Text id="inputGroup-sizing-default">
              Direccion https:// de Imagen:
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="img"
              onChange={(e) => handleChange(e)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3 mt-3 w-50 me-2">
            <InputGroup.Text id="inputGroup-sizing-default">
              Titulo Imagen:
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="text"
              onChange={(e) => handleChange(e)}
              required
            />
          </InputGroup>
        </div>

        <div>
          <Button type="submit" className="mt-2 w-50">
            Agregar Imagen
          </Button>
        </div>
      </Form>
      <h3>Imagenes Cargadas</h3>
      {arrayImgState.length === 0 && <Alert variant="danger">NO HAY IMAGENES CARGADAS</Alert>}
      <div className="d-flex">
        {arrayImgState.map((image) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image.img} />
            <Card.Body>
              <Card.Title>{image.text}</Card.Title>
              <Button variant="danger">Eliminar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
      <h3>Vista Previa Sliders</h3>
      {arrayImgState.length === 0 && <Alert variant="danger">NO HAY IMAGENES CARGADAS</Alert>}
      <CarouselComponent arrayImgState={arrayImgState} />
      </div>
    </div>
  );
}
