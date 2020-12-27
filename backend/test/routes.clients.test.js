// Assert se encarga de verificar si es verdad o no nuestra comparacion en los test
const assert = require('assert');
// Nos permite elegir que de envez de que nos traiga un paquete real nos traiga un mock
const proxyquire = require('proxyquire');
// Mocks para verificar que esten funcionando corectacmente
const { clientsMock, ClientsServiceMock } = require('../utils/mocks/clients');
// Necesitamos test server
const testServer = require('../utils/testServer');

//----------------------------------------------
//----------------------------------------------

// We describe test
// describe(title, ()=>{})
describe('routes - clients', () => {
  const route = proxyquire('../network/router', {
    // We replace services by serviceMock
    '../services/clients': ClientsServiceMock,
  });

  // We load the route from testServer
  const request = testServer(route);

  // GET
  describe('GET /clients', () => {
    // it(response,()=>{})
    it('should respond with status 200', (done) => {
      request.get('/api/clients').expect(200, done);
    });

    it('should respond with the list of clients', (done) => {
      request.get('/api/clients').end((err, res) => {
        assert.deepEqual(res.body, {
          error: '',
          data: clientsMock,
          message: 'clients listed',
        });
        done();
      });
    });
  });
});
