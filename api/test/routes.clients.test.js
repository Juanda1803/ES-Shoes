// Assert se encarga de verificar si es verdad o no nuestra comparacion en los test
const assert = require('assert');
// Nos permite elegir que de envez de que nos traiga un paquete real nos traiga un mock
const proxyquire = require('proxyquire');

// Mocks para verificar que esten corectacmente
const { clientsMock, ClientsServiceMock } = require('../utils/mocks/clients');
// Necesitamos test server
const testServer = require('../utils/testServer');

// Describimos test
describe('routes - clients', () => {
  const route = proxyquire('../routes/index.js', {
    '../services/clients': ClientsServiceMock,
  });

  const request = testServer(route);

  describe('GET /clients', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/clients').expect(200, done);
    });

    it('should respond with the list of clients', (done) => {
      request.get('/api/clients').end((err, res) => {
        assert.deepEqual(res.body, {
          data: clientsMock,
          message: 'clients listed',
        });
        done();
      });
    });
  });
});
