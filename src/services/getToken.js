const getToken = () => {
  const localToken = localStorage.getItem("token");
  return localToken ? localToken : null;
};

export default getToken;
