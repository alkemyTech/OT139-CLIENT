import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import './formedituser.css';

export default function FormEditUser() {
  const [isAdmin, setIsAdmin] = useState(1);
  const [islogged, setLogged] = useState(1); 
  const [errorState, setErrorState] = useState({});

  const initialValuesForm = {
    name: '',
    lastName: '', // here value of user registed
    roleId: '',
  };

  const validateName = (values, errorsObject) => {
    if (!values.name) {
      return (errorsObject.name = 'El Nombre es Obligatorio');
    }
    return errorsObject;
  };

  const validateLastName = (values, errorsObject) => {
    if (!values.lastName) {
      return (errorsObject.lastName = 'El Apellido es Obligatorio');
    }
    return errorsObject;
  };

  const validateField = (values) => {
    let errorsObject = {};
    validateName(values, errorsObject);
    validateLastName(values, errorsObject);
    setErrorState(errorsObject);
    return errorsObject;
  };

  const handleSubmit = ( _, resetForm) => {
    resetForm();
  };
  
  return (
    <div className='border p-4 width_30 width_95'>
      <h1 className='color_red_ong'>Editar Mi Perfil</h1>
      {islogged ? (
        <Formik
          initialValues={initialValuesForm}
          validate={validateField}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {() => (
            <Form noValidate className='needs-validation'>
              <div className='container_field d-flex flex-column ms-2'>
                <div className='text-start'>
                  <label htmlFor='name'>Nombre</label>
                  <Field
                    id='name'
                    name='name'
                    type='text'
                    className={
                      !errorState.name
                        ? 'field me-2 mb-2 mt-2 w-100'
                        : 'field me-2 mb-2 mt-2 w-100 is-invalid form-control'
                    }
                    required
                  />
                  <ErrorMessage
                    name='name'
                    component='h6'
                    className='color_red'
                  />
                </div>
                <div className='text-start'>
                  <label htmlFor='lastName'>Apellido</label>
                  <Field
                    id='lastName'
                    name='lastName'
                    type='text'
                    className={
                      !errorState.lastName
                        ? 'field me-2 mb-2 mt-2 w-100'
                        : 'field me-2 mb-2 mt-2 w-100 is-invalid form-control'
                    }
                    required
                  />
                  <ErrorMessage
                    name='lastName'
                    component='h6'
                    className='color_red'
                  />
                </div>
                {isAdmin ? (
                  <div className='text-start'>
                    <label htmlFor='rolId'>Tipo de Usuario</label>
                    <Field
                      id='rolId'
                      name='rolId'
                      type='text'
                      component='select'
                      className='field mb-3 mt-2 w-100'
                      required
                    >
                      <option value='1'>Administrador</option>
                      <option value='0'>Usuario</option>
                    </Field>
                    <ErrorMessage
                      name='rolId'
                      component='h6'
                      className='color_red'
                    />
                  </div>
                ) : null}
                <div className='mb-3'>
                  <Button type='submit' className='button_style mt-3 w-50'>
                    Modificar Datos
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
    </div>
  );
}
