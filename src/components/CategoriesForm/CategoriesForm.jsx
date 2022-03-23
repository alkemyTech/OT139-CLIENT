import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../loader/Loader';
import { ErrorAlert, SuccessAlert } from '../Alert';
import {
  createCategory,
  updateCategory,
} from '../../actions/categoriesActions';

const CategoriesForm = ({ categoryObject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const categoryCreate = useSelector((state) => state.categoriesCreate);
  const {
    success: successCreate,
    loading: loadingCreate,
    error: errorCreate,
  } = categoryCreate;

  const categoryUpdate = useSelector((state) => state.categoriesUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      SuccessAlert('Categoria Creada');
    }
    if (successCreate) {
      SuccessAlert('Categoria Actualizada');
    }
    if (errorCreate) {
      ErrorAlert('Error al crear categoria', errorCreate);
    }
    if (errorUpdate) {
      ErrorAlert('Error al actualizar categoria', errorUpdate);
    }
    if (categoryObject) {
      setName(categoryObject.name);
      setDescription(categoryObject.description);
    }
  }, [categoryObject, successUpdate, successCreate, errorCreate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoryObject) {
      dispatch(updateCategory({ name, description, id: categoryObject._id }));
    } else {
      dispatch(createCategory({ name, description }));
    }
  };

  return (
    <Container>
      {loadingCreate || loadingUpdate ? (
        <Loader />
      ) : (
        <Row className='justify-content-md-center m-5 bg-light py-5 px-1 min-vh-70'>
          <Col xs={12} md={6}>
            <h1>Edit/Create Category</h1>
            <Form>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter Name'
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button className='my-3 w-100 p-2' onSubmit={handleSubmit}>
                submit contact
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CategoriesForm;
