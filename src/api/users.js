import axios from 'axios';

const loginRequest = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(
    'http://localhost:3000/users/auth/login',
    { email, password },
    config
  );

  return data;
};

const registerRequest = async (email, password, firstName, lastName) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(
    'http://localhost:3000/users/auth/register',
    { email, password, firstName, lastName },
    config
  );

  return data;
};

export { loginRequest, registerRequest };
