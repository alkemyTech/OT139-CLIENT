import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ErrorCard from '../ErrorCard/ErrorCard';
import LoadingCard from '../LoadingCard/LoadingCard';

import './myProfile.css';

export default function MyProfile() {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const errorCardProps = {
    title: 'Algo salio mal procesando su solicitud.',
    text: 'Por favor vuelva a intentarlo en unos instantes.',
  };

  const handleEditProfile = () => {
    // @TODO Implementar la funcionalidad del botón Editar Cuenta
  };

  const handleDeleteAccount = () => {
    // @TODO Implementar la funcionalidad del botón Eliminar Cuenta
  };

  useEffect(() => {
    async function getProfileData() {
      try {
        setIsLoading(true);
        // @TODO Implementar una vez que la API esté lista
        // Llamar a un endpoint de Autenticación con los datos del usuario
        const response = await Promise.resolve({ ok: true });
        if (!response.ok) {
          throw new Error('Data could not be retrieved');
        }

        const data = {
          firstName: 'John',
          lastName: 'Smith',
          email: 'johnsmith@example.com',
        };

        setProfileData(data);
      } catch (err) {
        setError(true);
      }
      setIsLoading(false);
    }

    getProfileData();
  }, []);

  return (
    <div className='max_width_wrapper_medium mx-auto my-4'>
      {isLoading && <LoadingCard />}
      {!isLoading && error && <ErrorCard {...errorCardProps} />}
      {!isLoading && profileData && (
        <Container as={Card} fluid='md'>
          <Card.Body className='px-md-4'>
            <Card.Title className='mb-4'>
              <div className='title_large'>Mi Perfil</div>
            </Card.Title>
            <Card.Subtitle className='mb-4'>
              <div className='subtitle'>Datos de Cuenta</div>
            </Card.Subtitle>
            <Row className='mb-4'>
              <Col className='text_disabled' sm='6'>
                Nombre
              </Col>
              <Col className='text_strong' sm='6'>
                {profileData?.firstName}
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col className='text_disabled' sm='6'>
                Apellido
              </Col>
              <Col className='text_strong' sm='6'>
                {profileData?.lastName}
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col className='text_disabled' sm='6'>
                E-Mail
              </Col>
              <Col className='text_strong' sm='6'>
                {profileData?.email}
              </Col>
            </Row>
            <Button
              className='mb-5'
              disabled={!profileData}
              onClick={handleEditProfile}
            >
              Editar Cuenta
            </Button>
            <Card.Subtitle className='mb-3'>
              <div className='subtitle color_danger'>Eliminar Cuenta</div>
            </Card.Subtitle>
            <Card.Text className='mb-4'>
              Una vez que haya eliminado su cuenta, no hay vuelta atrás. Por
              favor esté seguro.
            </Card.Text>
            <Button
              className='mb-4'
              variant='danger'
              onClick={handleDeleteAccount}
            >
              Eliminar su Cuenta
            </Button>
          </Card.Body>
        </Container>
      )}
    </div>
  );
}
