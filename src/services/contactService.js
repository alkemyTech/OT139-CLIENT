import axios from 'axios';

export const post = async (body) => {
  const response = {};
  body.phone = '11543254';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.post(
      'http://localhost:3000/contacts',
      body,
      config
    );
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
