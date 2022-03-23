import React, { useState, useEffect } from "react";

function BackofficeNews() {

  const [entries, setEntries] = useState([]);
  const [errors, setError] = useState([]);

  useEffect(() => {
    async function getBackOfficeNews() {
      try {
        const response = await fetch("http://localhost:3000/news");
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        setError(error);
      }
    };
    getBackOfficeNews();
  }, []);

  const handleEditNew = () => {
    //TODO @implementar la funcionalidad de editar 
  }

  const handleDeleteNew = (id, name) => {
    //TODO @implementar la funcionalidad de borrar 

  };

  return (
    <div className=".container-lg">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">imagen</th>
            <th scope="col">Día de creación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            entries.map((entriesItem) => {
              return (
                <tr>
                  <th scope="row">{entriesItem.name}</th>
                  <td>{entriesItem.imageUrl}</td>
                  <td>{entriesItem.createdAt}</td>
                  <td>
                    <button type="button" onClick={handleEditNew} class="btn btn-outline-primary">Editar</button>
                    <button type="button" onClick={handleDeleteNew} class="btn btn-outline-danger">Borrar</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );

};

export default BackofficeNews;
