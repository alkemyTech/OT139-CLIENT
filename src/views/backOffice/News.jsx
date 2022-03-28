import React, { useState, useEffect } from 'react';
import { ErrorAlert } from '../../components/Alert';
import { getNews } from '../../services/newsService';
import NewsForm from './NewsForm';

function BackofficeNews() {
  const [news, setNews] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const closeForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    const getBackOfficeNews = async () => {
      const { data, error } = await getNews();
      if (error) {
        ErrorAlert('Error!', error);
      } else {
        setNews(data);
      }
    };
    getBackOfficeNews();
  }, []);

  const handleEditNew = async (id) => {
    const newById = news.find((newsItem) => newsItem.id === id);
    setFormData({ newById });
    setIsFormOpen(true);
  };

  const handleDeleteNew = async (id, name) => {
    //TODO @implementar la funcionalidad de borrar ticket 87
  };

  return (
    <>
      {isFormOpen ? (
        <NewsForm closeForm={closeForm} newById={formData?.newById} />
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
              {news.map((newsItem) => {
                return (
                  <tr>
                    <th scope='row'>{newsItem.name}</th>
                    <td>{newsItem.imageUrl}</td>
                    <td>{newsItem.createdAt}</td>
                    <td>
                      <button
                        type='button'
                        onClick={handleEditNew(newsItem.id)}
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
