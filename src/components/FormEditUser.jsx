import React , { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';

export default function FormEditUser() {
    const [isAdmin , setIsAdmin] = useState()
    const [islogged , setLogged] = useState()

  const initialValuesForm = {
    name: '',
    lastName: '', // here value of user registed
    roleId: '',
  };

  const validateName = (values , errorsObject) => {
      if (!values.name){
          return errorsObject.name = 'El nombre es obligatorio'
      }
      return errorsObject;
  };

  const validateLastName = (values , errorsObject) => {
    if (!values.lastName){
        return errorsObject.lastName = 'El Apellido es obligatorio'
    }
    return errorsObject;
  };

  const validateField = (values) => {
    let errorsObject = {};
    validateName(values, errorsObject);
    validateLastName(values, errorsObject);
    console.log(errorsObject)
    console.log(values)
    return errorsObject;
  };

  const handleSubmit = () => {};

  return (
    <div>
      <h1>Editar mi perfil</h1>
      {islogged  ? (
        <Formik
          initialValues={initialValuesForm}
          validate={validateField}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {() => (
            <Form>
              <div className='container_field d-flex flex-column ms-2'>
                <div className='text-start'>
                  <label htmlFor='name'>Nombre</label>
                  <Field
                    id='name'
                    name='name'
                    type='text'
                    className='field me-2 mb-2 mt-2 w-100'
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
                    className='field me-2 mb-2 mt-2 w-100'
                  />
                  <ErrorMessage
                    name='lastName'
                    component='h6'
                    className='color_red'
                  />
                </div>
                {isAdmin ? (
                  <div className='text-start'>
                    <label htmlFor='rolId'>Rol</label>
                    <Field
                      id='rolId'
                      name='rolId'
                      type='text'
                      component='select'
                      className='field mb-2 mt-2 w-100'
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
                  <Button type='submit' className='button_style mt-2 w-50'>
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
