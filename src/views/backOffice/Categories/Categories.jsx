import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { get } from '../../../services/apiService';
import { ErrorAlert } from '../../../components/Alert';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const url = `http://localhost:3000/categories`;

  useEffect(async () => {
    const { data, error } = await get(url);

    if(error){
      ErrorAlert('Error!', 'Ocurrio un error');
    }else{
      setCategories(data)                                                                                                                                                                                                         
    }
    
  }, [url]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categories?.length ? (
            categories.map((category) => {
              return (
                <tr>
                  <td>{category.name}</td>
                </tr>
              );
            })
          ) : (
            <tr className='text-center'>No se encontraron Actividades</tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};
