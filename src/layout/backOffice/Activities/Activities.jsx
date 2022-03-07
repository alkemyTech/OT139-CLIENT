import React from 'react';
import style from './activities.module.css';
import { Table, Button, Container } from 'react-bootstrap';

export default function Activities(props) {
  const editHandler = (id) => {
    //TODO
    return;
  };

  const deleteHandler = (id) => {
    //TODO
    return;
  };

  return (
    <div className={style.container}>
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
            {props?.activities ? (
              props.activities.map((item, id) => (
                <tr key={id}>
                  <td width='80%'>{item.name}</td>
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
            ) : (
              <tr className='text-center'>No se encontraron Actividades</tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}