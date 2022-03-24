import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationDetails } from '../../actions/organizationAction';

export const Footer = () => {
  const [logo, setLogo] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);
  const arraySocialMedias = Object.entries(socialMedias);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const organizationDetails = useSelector((state) => state.organizationDetails);
  const { organization, loading, error } = organizationDetails;

  useEffect(() => {
    if (!organization) {
      dispatch(getOrganizationDetails());
    } else {
      setLogo(organization.image);
      setSocialMedias(organization.social);
    }
  }, [dispatch, organization]);

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col>
            {!logo ? (
              'Logo somos mas'
            ) : (
              <img src={logo} alt='Logo somos mas'></img>
            )}
          </Col>
          <Col className='footer-links'>
            <Link to={`/about`}>Acerca</Link>
            <Link to={`/contact`}>Nosotros</Link>
          </Col>
          <Col className='footer-links'>
            {arraySocialMedias.map((socialMediaItem) => {
              return <a href={`${socialMediaItem[1]}`}>{socialMediaItem[0]}</a>;
            })}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
