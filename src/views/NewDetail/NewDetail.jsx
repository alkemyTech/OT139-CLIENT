import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { get } from '../../services/apiService';
import './newDetail.css';
import { ErrorAlert } from '../../components/Alert';

const NewDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const url = `http://localhost:3000/news/${ id }`;

  useEffect(() => {
    async function getNew () {
      const { data, error } = await get(url);
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setNews(data);
      }
    } 
    getNew()
  }, [url]);


  return (
    <Container>
      <div className='text-center'>
        <h2>{ news.name }</h2>
      </div>
      <div className='mt-5'>
        <h4>
          { news.content }
        </h4>
      </div>
      <div>
        <img className='img-fluid' src={ news.imageUrl }></img>
      </div>

    </Container>
  );
};

export default NewDetail;
