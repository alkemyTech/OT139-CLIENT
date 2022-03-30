import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { getContacts } from '../../services/contactsService';
import { ErrorAlert } from '../../components/Alert';

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function getContactsData() {
      const { data, error } = await getContacts();

      if (!error) {
        setContacts(data?.result);
      } else {
        ErrorAlert(
          'Contactos no encontrados',
          'Ocurrio un error procesando su solicitud. Vuelva a intentarlo en unos momentos.'
        );
      }
    }

    getContactsData();
  }, []);

  return (
    <Container as={Table} striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
};

export default ContactList;
