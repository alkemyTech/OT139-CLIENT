import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getOrganizationDetails } from '../../actions/organizationActions';
import Loader from '../loader/Loader';
import './footer.css';

export const Footer = () => {
  const [logo, setLogo] = useState('');
  const [socialMedias, setSocialMedias] = useState([]);

  const dispatch = useDispatch();

  const organizationDetails = useSelector((state) => state.organizationDetails);
  const { organization, loading } = organizationDetails;

  useEffect(() => {
    if (!organization) {
      dispatch(getOrganizationDetails());
    } else {
      setLogo(organization.image);

      setSocialMedias([
        { Twitter: organization.twitter },
        { Flickr: organization.flickr },
        { Youtube: organization.youtube },
        { Linkedin: organization.linkedin },
        { Facebook: organization.facebook },
        { Vimeo: organization.vimeo },
      ]);
    }
  }, [dispatch, organization]);

  return (
    <footer className='footer m-0 p-0 vh-20'>
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
              {socialMedias.map((socialMediaItem, id) => {
                return (
                  <a key={id} href={`${Object.values(socialMediaItem)[0]}`}>
                    {Object.keys(socialMediaItem)[0]}
                  </a>
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </footer>
  );
};
