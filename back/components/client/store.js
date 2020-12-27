const { clientsMock } = require('../../utils/mocks/clients');

const getAllCLients = async () => {
  return await clientsMock;
};

const addClient = (body) => {
  return clientsMock.push({ ...body });
};

module.exports = {
  allClients: getAllCLients,
  add: addClient,
};
