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

export { loginRequest };
