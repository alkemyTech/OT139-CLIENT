import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { get, put } from '../../services/apiService';
import { SuccessAlert, ErrorAlert } from '../../components/Alert';

import ErrorCard from '../../components/ErrorCard/ErrorCard';
import LoadingCard from '../../components/LoadingCard/LoadingCard';

import './organizationEdit.css';

export default function OrganizationEdit() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = { name: '', logo: '' };

  const validateName = (values, errors) => {
    if (!values.name) {
      errors.name = 'Este campo es obligatorio';
    } else if (values.name.length < 3) {
      errors.name = 'Este campo debe tener 3 caracteres o más';
    }
  };

  const validateLogo = (values, errors) => {
    if (!values.logo) {
      errors.logo = 'Este campo es obligatorio';
    } else if (values.logo.length < 3) {
      errors.logo = 'Este campo debe tener 3 caracteres o más';
    }
  };

  const validate = (values) => {
    const errors = {};

    validateName(values, errors);
    validateLogo(values, errors);

    return errors;
  };

  const onSubmit = async (values) => {
    const correctValues = {
      name: values.name,
      image: values.logo,
    };

    const response = await put('/organizations/1', correctValues);
    const isValidResponse = response && !(response instanceof Error) && response.data?.ok;

    if (isValidResponse) {
      SuccessAlert('Felicidades', 'Se guardaron los cambios satisfactoriamente.');
    } else {
      ErrorAlert('Oops...', 'Hubo un error al guardar los cambios.');
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  const formik = useFormik({ initialValues, validate, onSubmit });

  useEffect(() => {
    async function getOrganizationData() {
      setIsLoading(true);

      const response = await get('/organizations/1/public');
      const isValidResponse = response && !(response instanceof Error);

      if (isValidResponse) {
        const data = {
          name: response.name,
          logo: response.image,
        };

        formik.setValues(data);
      } else {
        setError(true);
      }

      setIsLoading(false);
    }

    getOrganizationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const getInputStyles = (inputName) => {
    return formik.touched[inputName] && formik.errors[inputName]
    ? 'edit-form_input edit-form_invalid-input'
    : 'edit-form_input';
  }

  return (
    <div className='max-width-wrapper-small mx-auto mt-4'>
      {isLoading && <LoadingCard />}
      {!isLoading && error && <ErrorCard />}
      {!isLoading && !error && (
        <div className='edit-form'>
          <h3 className='edit-form_heading'>
            Administra los datos de la organización
          </h3>
          <form onSubmit={formik.handleSubmit}>
            <div className='edit-form_input-group'>
              <label
                className='edit-form_label required-field'
                htmlFor='edit-form_name'
              >
                Nombre
              </label>
              <input
                className={getInputStyles('name')}
                type='text'
                id='edit-form_name'
                name='name'
                placeholder='Somos Más'
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <p className='edit-form_error-msg'>{formik.errors.name}</p>
              )}
            </div>
            <div className='edit-form_input-group'>
              <label
                className='edit-form_label required-field'
                htmlFor='edit-form_logo'
              >
                Logo
              </label>
              <input
                className={getInputStyles('logo')}
                type='text'
                id='edit-form_logo'
                name='logo'
                placeholder='URL del Logo'
                {...formik.getFieldProps('logo')}
              />
              {formik.touched.logo && formik.errors.logo && (
                <p className='edit-form_error-msg'>{formik.errors.logo}</p>
              )}
            </div>
            <button
              type='submit'
              className='edit-form_btn edit-form_btn-primary'
            >
              Guardar Cambios
            </button>
            <button
              type='button'
              onClick={onCancel}
              className='edit-form_btn edit-form_btn-secondary'
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
