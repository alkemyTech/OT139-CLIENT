import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './myProfile.css';

function getProfileData() {
  // @TODO Implementar una vez que la API esté lista
  // Llamar a un endpoint de Autenticación con los datos del usuario
  return {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@example.com',
  };
}

export default function MyProfile() {
  const profileData = getProfileData();

  const handleEditProfile = () => {
    // @TODO Implementar la funcionalidad del botón Editar Cuenta
    console.log('Se está editando el perfil');
  }

  const handleDeleteAccount = () => {
    // @TODO Implementar la funcionalidad del botón Eliminar Cuenta
    console.log('Se está eliminando la cuenta');
  }

  return (
    <div className='max_width_wrapper_medium mx-auto'>
      <Container as={Card} fluid='md'>
        <Card.Body className='px-md-5'>
          <Row className='mb-3'>
            <Col>
              <div className='title_large'>
                Mi Perfil
              </div>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <div className='subtitle'>
                Datos de Cuenta
              </div>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col className='disableText' sm="6">
              Nombre
            </Col>
            <Col className='text_strong' sm="6">
              {profileData.firstName}
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col className='disableText' sm="6">
              Apellido
            </Col>
            <Col className='text_strong' sm="6">
              {profileData.lastName}
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col className='disableText' sm="6">
              E-Mail
            </Col>
            <Col className='text_strong' sm="6">
              {profileData.email}
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col>
              <Button size="lg" onClick={handleEditProfile}>
                Editar Cuenta
              </Button>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <div className='subtitle color_danger'>
                Eliminar Cuenta
              </div>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col>
              <p>Una vez que haya eliminado su cuenta, no hay vuelta atrás. Por favor esté seguro.</p>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <Button size="lg" variant='danger' onClick={handleDeleteAccount}>
                Eliminar su Cuenta
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Container>
    </div>
  )
}
