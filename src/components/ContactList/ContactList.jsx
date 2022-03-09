import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';

const ContactList = () => {
    const contacts = useFetch("http://localhost:3000/contacts");

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
          {contacts.map(contact => {
              <tr>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          })}
      </tbody>
    </Table>
  );
};

export default ContactList;
