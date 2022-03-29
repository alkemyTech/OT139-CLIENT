import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { ErrorAlert } from '../../components/Alert';
import style from './activities.module.css';
import { getActivities } from '../../services/activitiesService';
import 'animate.css';

export default function Activities() {
  const [activities, setActivities] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      let { data, error } = await getActivities('/activities');
      if (error) {
        ErrorAlert('Error!', 'Ocurrio un error');
      } else {
        setActivities(data);
      }
    }

    fetchAPI();
    setLoading(false);
  }, []);

  const editHandler = (id) => {
    //TODO
    return;
  };

  const deleteHandler = (id) => {
    //TODO
    return;
  };

  return (
    <div className={`${style.container} animate__animated animate__fadeInUp`}>
      <div className={style.title}>
        <h1>Actividades</h1>
      </div>
      <div className={style.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <Container>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr className='table-warning'>
              <th>Actividades</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {activities ? (
              activities.map((item, id) => (
                <tr key={id}>
                  <td width='80%' className={style.name}>
                    {item.name}
                  </td>
                  <td className='text-center align-middle'>
                    <Button
                      variant='light'
                      className='btn mx-2'
                      onClick={() => editHandler(item._id)}
                    >
                      <i className='fas fa-edit'></i>
                    </Button>

                    <Button
                      variant='danger'
                      className='btn  mx-2'
                      onClick={() => deleteHandler(item._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : loading ? (
              <tr className='text-center'>
                <td>CARGANDO</td>
              </tr>
            ) : (
              <tr className='text-center'>
                <td>NO HAY ACTIVIDADES</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
