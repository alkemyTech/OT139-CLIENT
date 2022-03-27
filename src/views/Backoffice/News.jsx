import React, { useState, useEffect } from 'react';
import { ErrorAlert } from '../../components/Alert';
import { getEntries } from '../../services/newsService';
import NewsForm from './NewsForm';

function BackofficeNews() {
  const [entries, setEntries] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const closeForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    const getBackOfficeNews = async () => {
      const { data, error } = await getEntries();
      if (error) {
        ErrorAlert('Error!', error);
      } else {
        setEntries(data);
      }
    };
    getBackOfficeNews();
  }, []);

  const handleEditNew = async (id) => {
    const entry = entries.find((entry) => entry.id === id);
    setFormData({ entry });
    setIsFormOpen(true);
  };

  const handleDeleteNew = async (id, name) => {
    //TODO @implementar la funcionalidad de borrar ticket 87
  };

  return (
    <>
      {isFormOpen ? (
        <NewsForm closeForm={closeForm} entry={formData?.entry} />
      ) : (
        <div className='.container-lg'>
          <table class='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Nombre</th>
                <th scope='col'>imagen</th>
                <th scope='col'>Día de creación</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entriesItem) => {
                return (
                  <tr>
                    <th scope='row'>{entriesItem.name}</th>
                    <td>{entriesItem.imageUrl}</td>
                    <td>{entriesItem.createdAt}</td>
                    <td>
                      <button
                        type='button'
                        onClick={handleEditNew(entriesItem.id)}
                        class='btn btn-outline-primary'
                      >
                        Editar
                      </button>
                      <button
                        type='button'
                        onClick={handleDeleteNew}
                        class='btn btn-outline-danger'
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default BackofficeNews;
