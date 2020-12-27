const store = require('./store');

const getAllCLients = async () => {
  return await Promise.resolve(store.allClients());
};

const addClient = (body) => {
  return new Promise((resolve, reject) => {
    resolve(store.add(body));
    reject('Internal error');
  });
};

module.exports = {
  getAllCLients,
  addClient,
};
