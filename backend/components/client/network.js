const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const clients = await controller.getAllCLients();
    response.success(req, res, clients, 200, 'clients listed');
  } catch (err) {
    response.error(req, res, 'Internal error', 500, err);
    next(err);
  }
});

// GET
router.get('/:clientId', async (req, res, next) => {
  try {
    const client = await controller.getAllCLients();
    response.success(req, res, client[0], 200, 'client retrieve');
  } catch (err) {
    response.error(req, res, 'Internal error', 500, err);
    next(err);
  }
});

// POST
router.post('/', async (req, res, next) => {
  try {
    const createClientId = await controller.addClient(req.body);
    response.success(req, res, createClientId, 201, 'client created');
  } catch (err) {
    response.error(req, res, 'Internal error', 400, err);
    next(err);
  }
});

// PUT
router.put('/:clientId', async (req, res, next) => {
  try {
    const updateClientId = await controller.updateClient(req.params.id);
    response.success(req, res, updateClientId, 200, 'client updated');
  } catch (err) {
    response.error(req, res, 'Internal error', 500, err);
    next(err);
  }
});

// PATCH
router.patch('/:clientId', async (req, res, next) => {
  try {
    const updatePatchClientId = await controller.updatePatchClient(
      req.params.id
    );
    response.success(req, res, updatePatchClientId, 200, 'client updated');
  } catch (err) {
    response.error(req, res, 'Internal error', 500, err);
    next(err);
  }
});

// DELETE
router.delete('/:clientId', async (req, res, next) => {
  try {
    const deleteClientId = await controller.deleteClient(req.params.id);
    response.success(req, res, deleteClientId, 200, 'client deleted');
  } catch (err) {
    response.error(req, res, 'Internal error', 400, err);
    next(err);
  }
});

module.exports = router;
