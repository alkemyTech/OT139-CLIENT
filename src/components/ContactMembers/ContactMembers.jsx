import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {get} from '../../services/apiService'

const ContactMembers = () => {
    const [data, setData] = useState({});
  const url = 'http://localhost3000/members';

  useEffect(() => {
    const {data} = get(url);
      setData({
        ...data,
        data
      })
  }, [data]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Nuestros miembros</th>
        </tr>
      </thead>
      <tbody>
        {data.map((member) => (
          <tr>
            <td>
              <img src={member.imageUrl} alt='' />
            </td>
            <td>{member.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ContactMembers;
