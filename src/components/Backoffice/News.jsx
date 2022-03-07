import React, { useState, useEffect } from "react";

const entriesNews = [
 { id: 0, name: "Show", imageUrl: "google.com", createdAt: "20/02/2022" },
 { id: 1, name: "Snow", imageUrl: "google.com", createdAt: "28/02/2022" },
 { id: 2, name: "Slow", imageUrl: "google.com", createdAt: "25/02/2022" }
];

function BackofficeNews() {

  const [entries, setEntries] = useState(entriesNews);
  const [errors, setError] = useState([]);

  // useEffect(() => {
  //   async function getBackOfficeNews() {

  //     try {
  //       const response = await fetch("");
  //       const data = await response.json();
  //       setEntries(data.entries);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   getBackOfficeNews();
  // });

  const handleEditRecord = () => {
    //TODO @implementar la funcionalidad de editar 
  }

  const handleDeleteRecord = () => {
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
                <td><button type="button" onClick={handleEditRecord} class="btn btn-outline-primary">Editar</button><button type="button" onClick={handleDeleteRecord} class="btn btn-outline-danger">Borrar</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default BackofficeNews;
