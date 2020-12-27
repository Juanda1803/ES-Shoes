const client = require('../routes/clients');

const router = (server) => {
  server.use('/api/clients', client);
};

module.exports = router;
