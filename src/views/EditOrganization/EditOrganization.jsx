import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { get } from '../../services/apiService';
import './editOrganization.css';

export default function EditOrganization() {
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

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  const formik = useFormik({ initialValues, validate, onSubmit });

  useEffect(() => {
    async function getOrganizationData() {
      const data = await get('/organizations/1/public');

      const filteredData = {
        name: data.name,
        logo: data.image,
      };

      formik.setValues(filteredData);
    }

    getOrganizationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputNameStyles =
    formik.touched.name && formik.errors.name
      ? 'edit-form_input edit-form_invalid-input'
      : 'edit-form_input';

  const inputLogoStyles =
    formik.touched.logo && formik.errors.logo
      ? 'edit-form_input edit-form_invalid-input'
      : 'edit-form_input';

  return (
    <div className='edit-form mx-auto mt-4'>
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
            className={inputNameStyles}
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
            className={inputLogoStyles}
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
        <button type='submit' className='edit-form_btn edit-form_btn-primary'>
          Guardar Cambios
        </button>
        <button type='button' className='edit-form_btn edit-form_btn-secondary'>
          Cancelar
        </button>
      </form>
    </div>
  );
}
