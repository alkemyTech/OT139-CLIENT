import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'animate.css';
import { getUserInfo } from '../../localStorage/storage';

import ErrorCard from '../../components/ErrorCard/ErrorCard';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import { ConfirmAlert } from '../../components/Alert/';
import { logout } from '../../actions/userActions';

import './myProfile.css';

export default function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteAccount = () => {
    // @TODO Implementar la funcionalidad del botón Eliminar Cuenta
    ConfirmAlert('¿Está seguro que desea eliminar su perfil?', '').then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate('/');
      }
    });
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

        const data = getUserInfo()
        
        setProfileData(data.user);
      } catch (err) {
        setError(true);
      }
      setIsLoading(false);
    }

    getProfileData();
  }, []);

  return (
    <div className='max_width_wrapper_medium mx-auto my-4 animate__animated animate__fadeIn'>
      {isLoading && <LoadingCard />}
      {!isLoading && error && <ErrorCard />}
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
            <Link to={`/edituser/`}>
            <Button
              className='mb-5'
              disabled={!profileData}
            >
              Editar Cuenta
            </Button>
            </Link>
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
