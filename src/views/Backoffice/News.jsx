import React, { useState, useEffect } from "react";
import { ConfirmAlert } from "../../components/Alert";

const entriesNews = [
  { id: 0, name: "Show", imageUrl: "google.com", createdAt: "20/02/2022" },
  { id: 1, name: "Snow", imageUrl: "google.com", createdAt: "28/02/2022" },
  { id: 2, name: "Slow", imageUrl: "google.com", createdAt: "25/02/2022" }
];

function BackofficeNews() {

  const [entries, setEntries] = useState([]);
  const [errors, setError] = useState([]);

  useEffect(() => {
    async function getBackOfficeNews() {


      //TODO @implementación de obtención de News desde el endpoint

    };
    setEntries(entriesNews);
  });

  const handleEditNew = () => {
    //TODO @implementar la funcionalidad de editar 
  }

  const handleDeleteNew = (id, name) => {
    const title = "Borrar novedad";
    const message = `¿Seguro de borrar la novedad ${name}?`;
    const confirmationDelete = ConfirmAlert(title, message);
    if (confirmationDelete === true) {
      const filtredData = entries.filter(item => item.id !== id);
      setEntries(filtredData);
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
                    <button type="button" onClick={handleDeleteNew(entriesItem.id, entriesItem.name)} class="btn btn-outline-danger">Borrar</button>
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
}
export default BackofficeNews;
