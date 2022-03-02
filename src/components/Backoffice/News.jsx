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

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">imagen</th>
          <th scope="col">Día de creación</th>
          <th scope="col">editar</th>
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
            <td>editar/borrar</td> {//TODO @implementar la funcionalidad de editar y borrar }
          </tr>
          )
        })
        }
      </tbody>
    </table>
  );
}

export default News;
