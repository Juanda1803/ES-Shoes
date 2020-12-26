const express = require('express');
const app = express();
const morgan = require('morgan');
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Settings
const { config } = require('./config');
const clientsApi = require('./routes');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
clientsApi(app);
// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Config port
app.listen(config.port, () => {
  console.log(`Server is listening in http://localhost:${config.port}`);
});
