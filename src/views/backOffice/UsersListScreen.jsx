import { Table, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { usersList } from '../../actions/userActions';
import Loader from '../../components/loader/Loader';
import BackOffice from '../../layout/backOffice/BackOffice';
import { ErrorAlert } from '../../components/Alert';

const UsersListScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.usersList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(usersList());
  }, [dispatch]);

  const deleteHandler = (id) => {
    //TODO @implement delete user
  };

  const editHandler = (id) => {
    //TOOD @implemetn edit user
  };

  return (
    <BackOffice>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          ErrorAlert('error loading users', error)
        ) : (
          <Table striped bordered responsive className='table-sm'>
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
                    <div className='text-center'>
                      <Button
                        variant='light'
                        className='btn-sm w-25'
                        onClick={() => editHandler(user._id)}
                      >
                        <i className='fas fa-edit'></i>
                      </Button>
                      <Button
                        variant='danger'
                        className='btn-sm w-25'
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </BackOffice>
  );
};

export default UsersListScreen;
