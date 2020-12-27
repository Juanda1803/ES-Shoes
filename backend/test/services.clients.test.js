// Se encarga de verificar si es verdad o no nuestra comparacion en los test
// Takes care of verificate if is true or not our compararison in the test
const assert = require('assert');
// It allows us to choose that instead of bringing the actual package to bring us a mock
const proxyquire = require('proxyquire');

// They help us verify that hey are correctly
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { clientsMock } = require('../utils/mocks/clients');

// Describe test describe('name', fn)  serves to organize the tests of the tests
describe('services - movies', () => {
  // We get our service
  const ClientsServices = proxyquire('../services/clients', {
    // Every time we call the route it will be replaced by the MoviresServicesMock
    '../lib/mongo': MongoLibMock,
  });

  // We only charge the services
  const clientsService = new ClientsServices();
  // Test de las clients
  describe('when getAllClients method', async () => {
    it('should call the getall MongoLib method', async () => {
      await clientsService.getAllClients([]);
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of clients', async () => {
      const result = await clientsService.getAllClients([]);
      const expected = clientsMock;
      assert.deepEqual(result, expected);
    });
  });
});
