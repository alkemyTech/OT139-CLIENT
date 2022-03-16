import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './footer.css';
import Loader from '../loader/Loader';
import { ErrorAlert } from '../Alert';
import { getOrganizationDetails } from '../../actions/organizationsActions';

export const Footer = () => {
  const [logo, setLogo] = useState('');

  const dispatch = useDispatch();

  const organizationDetails = useSelector(
    (state) => state.organizationsDetails
  );
  const { loading, organization, error } = organizationDetails;

  useEffect(() => {
    if (!organization) {
      dispatch(getOrganizationDetails());
    } else {
      setLogo('/images/LOGO-SOMOS-MAS.png');
    }
  }, [dispatch, organization]);

  return (
    <footer className='footer m-0 p-0 vh-20'>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          ErrorAlert('Error', error?.message)
        ) : (
          <Row>
            <Col className='m-0 p-0 image-footer'>
              {!logo ? (
                'Logo somos mas'
              ) : (
                <Image className='m-0 p-0' src={logo} alt='Logo somos mas' />
              )}
            </Col>
            <Col className='footer-links'>
              <Link to={`/about`}>Acerca</Link>
              <Link to={`/contact`}>Nosotros</Link>
            </Col>
            <Col className='footer-links'>
              <a href={`/`}>Facebook</a>
              <a href={`/`}>Twitter</a>
              <a href={`/`}>Vimeo</a>
              <a href={`/`}>Linkedin</a>
              <a href={`/`}>Youtube</a>
            </Col>
          </Row>
        )}
      </Container>
    </footer>
  );
};
