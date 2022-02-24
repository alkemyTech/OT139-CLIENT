import BackOffice from '../../layout/backOffice/BackOffice';
import { Table, Button } from 'react-bootstrap';

import React from 'react';

const UsersList = () => {
  const users = [
    { name: 'John', surname: 'Doe', email: 'john@test.com' },
    { name: 'Jane', surname: 'Doe', email: 'jane@test.com' },
  ];

  const deleteHandler = (id) => {
    console.log('delete');
  };
  return (
    <BackOffice>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>
                <Button variant='light' className='btn-sm'>
                  <i className='fas fa-edit'></i>
                </Button>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(user._id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </BackOffice>
  );
};

export default UsersList;
