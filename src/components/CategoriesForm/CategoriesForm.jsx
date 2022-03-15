import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { ErrorAlert } from '../Alert';
import BackOffice from '../../layout/backOffice/BackOffice';
import { getCategoryDetails } from '../../actions/categoriesActions';
import { Footer } from '../footer/Footer';

const CategoriesForm = ({ categoryObject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const categoryDetails = useSelector((state) => state.categoriesDetails);
  const { category, loading, error } = categoryDetails;

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

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getCategoryDetails(id));
    }
  }, [id, dispatch]);

  const handleSubmit = () => {};

  return (
    <BackOffice>
      <Container>
        <Row className='justify-content-md-center m-5 bg-light py-5 px-1 min-vh-70'>
          <Col xs={12} md={6}>
            <h1>Edit/Create Category</h1>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text'></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={3}></Form.Control>
              </Form.Group>
              <Button className='my-3 w-100 p-2' onSubmit={handleSubmit}>
                submit contact
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </BackOffice>
  );
};

export default CategoriesForm;
