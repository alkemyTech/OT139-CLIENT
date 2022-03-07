const getUsers = async () => {
  //TODO @implement get users from backend endpoint /users
  return [
    { name: 'John', surname: 'Doe', email: 'john@test.com' },
    { name: 'Jane', surname: 'Doe', email: 'jane@test.com' },
  ];
};

export { getUsers };
