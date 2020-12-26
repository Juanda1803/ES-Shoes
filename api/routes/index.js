const express = require('express');
const _ = require('underscore');
const ClientsService = require('../services/clients');

// Schemas
const {
  clientIdSchema,
  createClientSchema,
  updateClientSchema,
} = require('../utils/schemas/clients');

const { validationHandler } = require('../utils/middleware/validationHandler');

// Funcion de rutas de la aplicacion
const clientsApi = (app) => {
  const router = express.Router();
  app.use('/api/clients', router);

  // El objeto de tipo clase
  const clientsService = new ClientsService();

  // GET-------------
  router.get('/', async (req, res, next) => {
    // Propiedades de la cadena de texto de la ruta query
    const { tags } = req.query;
    try {
      // Obtenemos todos los clientes
      const clients = await clientsService.getClients({ tags });
      // Lo mostramos en json con la data ya obtenida
      res.status(200).json({
        data: clients,
        message: 'clients listed',
      });
    } catch (err) {
      next(err);
    }
  });

  // GET ID-------------
  router.get(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }, 'params'),
    async (req, res, next) => {
      // Obtenermos los parametros de la ruta (ID)
      const { clientId } = req.params;
      try {
        const client = await clientsService.getClient({ clientId });
        res.status(200).json({
          data: client,
          message: 'client listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // POST---------------
  router.post(
    '/',
    validationHandler(createClientSchema),
    async (req, res, next) => {
      // Obtenemos de la req el cuerpo (contenido) de la data del cliente
      const { body: client } = req;
      if (
        client.name &&
        client.typeOfArrangement &&
        client.value &&
        client.payment &&
        client.date
      ) {
        try {
          const createdClientId = await clientsService.createClient({ client });
          res.status(201).json({
            data: createdClientId,
            message: 'client created',
          });
        } catch (err) {
          next(err);
        }
      } else {
        res.send('Wrong Request');
      }
    }
  );

  // PUT--------------
  router.put(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }, 'params'),
    validationHandler(updateClientSchema),
    async (req, res, next) => {
      // Obtenermos los parametros de la ruta (ID)
      const { clientId } = req.params;
      // Obtenemos de la req el cuerpo (contenido) de la data del cliente
      const { body: client } = req;
      try {
        const updatedClientId = await clientsService.updateClient({
          clientId,
          client,
        });
        res.status(200).json({
          data: updatedClientId,
          message: 'client updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  // DELETE------------
  router.delete(
    '/:clientId',
    validationHandler({ clientId: clientIdSchema }),
    async (req, res) => {
      // Obtenermos los parametros de la ruta (ID)
      const { clientId } = req.params;
      try {
        const deleteClientId = await clientsService.deleteClient({ clientId });
        res.status(200).json({
          data: deleteClientId,
          message: 'client deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
};

module.exports = clientsApi;
