import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function getCategoriesData() {
            try {
                const response = await fetch("http://localhost:3000/categories");
                const data = await response.json();
                setCategories(data.image);
            } catch(error) {
              setErrors(error);
            }
         }
          
         getCategoriesData();
    }, [])

    const editHandler = (id) => {
        //TODO
        return;
      };
    
      const deleteHandler = (id) => {
        //TODO
        return;
      };

  return (
    <Container>
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
            { categories?.length ? (
              categories.map(category => {
                    return <tr>
                        <td>{ category.name }</td>
                    </tr>
                    })
            ) : (
                <tr className='text-center'>No se encontraron Actividades</tr>
            )}
            </tbody>    
        </Table>
    </Container>
  )
}
