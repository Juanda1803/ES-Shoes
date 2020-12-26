// testServer.js
// Levanta un servidor para pruebas idenpendiente del server original

const express = require('express');
const supertest = require('supertest');

// Recibe una ruta
const testServer = (route) => {
  // Creamos una nueva app
  const app = express();
  route(app);
  return supertest(app);
};

module.exports = testServer;
