// Express
const express = require('express');
const router = express.Router();
// Services
const ClientsService = require('../services/clients');
const clientsService = new ClientsService();
// Response
const response = require('../network/response');
// Schemas
const {
  clientIdSchema,
  createClientSchema,
  updateClientSchema,
} = require('../utils/schemas/clients');
// Validation
const validationHandler = require('../utils/middleware/validationHandler');
// Cache
const cacheResponse = require('../utils/cacheResponse');
// Time
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

//---------------------------------------------
//---------------------------------------------

// GET ALL
router.get('/', async (req, res, next) => {
  cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
  const { tags } = req.query;

  try {
    const clients = await clientsService.getAllClients({ tags });
    response.success(req, res, clients, 200, 'clients listed');
  } catch (err) {
    // response.error(req, res, 'Internal error', 500, err);
    next(err);
  }
});

// GET
router.get(
  '/:clientId',
  validationHandler({ clientId: clientIdSchema }, 'params'),
  async (req, res, next) => {
    cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
    const { clientId } = req.params;

    try {
      const client = await clientsService.getClient({ clientId });
      response.success(req, res, client, 200, 'client retrieve');
    } catch (err) {
      // response.error(req, res, 'Internal error', 500, err);
      next(err);
    }
  }
);

// POST
router.post(
  '/',
  validationHandler(createClientSchema),
  async (req, res, next) => {
    const { body: client } = req;

    try {
      const createClientId = await clientsService.createClient({ client });
      response.success(req, res, createClientId, 201, 'client created');
    } catch (err) {
      // response.error(req, res, 'Internal error', 400, err);
      next(err);
    }
  }
);

// PUT
router.put(
  '/:clientId',
  validationHandler({ clientId: clientIdSchema }, 'params'),
  validationHandler(updateClientSchema),
  async (req, res, next) => {
    const { clientId } = req.params;
    const { body: client } = req;

    try {
      const updateClientId = await clientsService.updateClient({
        clientId,
        client,
      });
      response.success(req, res, updateClientId, 200, 'client updated');
    } catch (err) {
      // response.error(req, res, 'Internal error', 500, err);
      next(err);
    }
  }
);

// PATCH
router.patch(
  '/:clientId',
  validationHandler({ clientId: clientIdSchema }, 'params'),
  validationHandler(updateClientSchema),
  async (req, res, next) => {
    const { clientId } = req.params;
    const { body: client } = req;

    try {
      const updatePatchClientId = await clientsService.updatePatchClient({
        clientId,
        client,
      });
      response.success(req, res, updatePatchClientId, 200, 'client updated');
    } catch (err) {
      // response.error(req, res, 'Internal error', 500, err);
      next(err);
    }
  }
);

// DELETE
router.delete(
  '/:clientId',
  validationHandler({ clientId: clientIdSchema }, 'params'),
  async (req, res, next) => {
    const { clientId } = req.params;

    try {
      const deleteClientId = await clientsService.deleteClient({ clientId });
      response.success(req, res, deleteClientId, 200, 'client deleted');
    } catch (err) {
      // response.error(req, res, 'Internal error', 400, err);
      next(err);
    }
  }
);

module.exports = router;
