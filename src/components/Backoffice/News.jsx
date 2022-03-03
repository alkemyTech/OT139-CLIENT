import React, { useState, useEffect } from "react";

function News() {

  const [entries, setEntries] = useState([]);
  const [errors, setError] = useState([]);

  useEffect(() => {
    async function getBackOfficeNews() {

      try {
        const response = await fetch("");
        const data = await response.json();
        setEntries(data.entries);
      } catch (error) {
        setError(error);
      }
    };
    getBackOfficeNews();
  });

  editRecord = () => {
    //TODO @implementar la funcionalidad de editar 
  }

  deleteRecord = () => {
    //TODO @implementar la funcionalidad de borrar
  }

  return (
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
            <td><p class="text-primary" onClick={editRecord}>Editar</p>/ <p class="text-danger" onClick={deleteRecord}>Borrar</p></td>
          </tr>
          )
        })
        }
      </tbody>
    </table>
  );
}

export default News;
