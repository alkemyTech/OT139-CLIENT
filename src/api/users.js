const loginRequest = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axios.post(
    'users/auth/login',
    { email, password },
    config
  );

  return data;
};

export { loginRequest };
