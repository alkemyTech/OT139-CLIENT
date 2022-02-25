const getToken = () => {
  const localToken = localStorage.getItem("token");
  return localToken;
};

export default getToken;
