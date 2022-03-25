import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { get } from '../../services/apiService';

const ContactList = () => {
  const [data, setData] = useState({});
    const url = "http://localhost:3000/contacts";

    useEffect(()=>{
      const contact = get(url);
      setData({
        ...data,
        contact
      })
    }, [data]);


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
          {data.map(contact => {
            return (
              <tr>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default ContactList;
