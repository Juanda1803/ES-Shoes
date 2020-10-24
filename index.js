const express = require('express');
const app = express();
const morgan = require('morgan');

// Configuraciones
const { config } = require('./config');
const clientsApi = require('./routes');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
clientsApi(app);

// Config port
app.listen(config.port, () => {
  console.log(`Server is listening in http://localhost:${config.port}`);
});
