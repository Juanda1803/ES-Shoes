// Allow us to do structMocks
// Inject properties if services were callled or not
// Sinon
const sinon = require('sinon');
// Mocks
const { clientsMock, filteredClientsMock } = require('./clients'); //eslint-disable-line
// Creation of out stub
const getAllStub = sinon.stub();

//----------------------------------------------
//----------------------------------------------

// When we call clients resolve with the clientsMock
getAllStub.withArgs('clients').resolves(clientsMock);

// We want that us resole with the first client od our mock (id) -- return id
const createStub = sinon.stub().resolves(clientsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock,
};
