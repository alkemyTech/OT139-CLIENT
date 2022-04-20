import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {get} from '../../services/apiService'
import { ErrorAlert } from '../Alert';

const ContactMembers = () => {
    const [members, setMembers] = useState({data: ''});
    const url = 'http://localhost3000/members';

  useEffect(() => {
    const {data, error} = get(url);
    if(error){
      ErrorAlert('Error!', 'Ocurrio un error');
    }else{
      setMembers({
        ...members,
        data: data
      })
    }
  }, [members]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Nuestros miembros</th>
        </tr>
      </thead>
      <tbody>
        {members.data.map((member) => (
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
