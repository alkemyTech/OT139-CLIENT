import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import './formeditUser.css';
import { getUser } from '../../services/usersService';

export default function FormEditUser() {
  const [user , setUser] = useState()
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    const userData = async () => {
      const { data } = await getUser()
      setUser(data);
    }
    userData();
  }, []);

  const initialValuesForm = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    roleId: user?.roleId,
  };
  
  const validateName = (values, errorsObject) => {
    if (!values.firstName) {
      return (errorsObject.firstName = 'El Nombre es Obligatorio');
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
    <div className='width_25 width_95 container_form mb-5 pt-4'>
      <h1 className='color_red_ong text-center'>Editar Mi Perfil</h1>
      {user ? (
        <Formik
          initialValues={initialValuesForm}
          validate={validateField}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {() => (
            <Form noValidate className='needs-validation'>
              <div className='container_field d-flex flex-column'>
                <div className='text-start'>
                  <label htmlFor='firstName'>Nombre</label>
                  <Field
                    id='firstName'
                    name='firstName'
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
                        ? 'field mb-2 mt-2 w-100'
                        : 'field mb-2 mt-2 w-100 is-invalid form-control'
                    }
                    required
                  />
                  <ErrorMessage
                    name='lastName'
                    component='h6'
                    className='color_red'
                  />
                </div>
                {user.roleId === 1 ? (
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
                      <option value='2'>Usuario</option>
                    </Field>
                    <ErrorMessage
                      name='rolId'
                      component='h6'
                      className='color_red'
                    />
                  </div>
                ) : null}
                <div className='mb-3 text-center'>
                  <Button type='submit' className='button_style mt-3'>
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
