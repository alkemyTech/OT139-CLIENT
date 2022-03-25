import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getOrganizationDetails } from '../../actions/organizationAction';
import Loader from '../loader/Loader';
import './footer.css';

export const Footer = () => {
  const [logo, setLogo] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);
  let arraySocialMedias = [];

  const dispatch = useDispatch();

  const organizationDetails = useSelector((state) => state.organizationDetails);
  const { organization, loading } = organizationDetails;

  useEffect(
    () => {
      if (!organization) {
        dispatch(getOrganizationDetails());
      } else {
        setLogo(organization.image);
        setSocialMedias(organization.social);
        arraySocialMedias = [...socialMedias];
      }
    },
    [dispatch, organization],
    arraySocialMedias
  );

  return (
    <footer className='footer'>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col>
              {!logo ? (
                'Logo somos mas'
              ) : (
                <Image src={logo} alt='logo somos mas' />
              )}
            </Col>
            <Col className='footer-links'>
              <Link to={`/about`}>Acerca</Link>
              <Link to={`/contact`}>Nosotros</Link>
            </Col>
            <Col className='footer-links'>
              {arraySocialMedias.map((socialMediaItem) => {
                return (
                  <a href={`${socialMediaItem[1]}`}>{socialMediaItem[0]}</a>
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </footer>
  );
};
