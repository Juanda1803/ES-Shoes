// Express
const express = require('express');
const app = express();
// Cors
const cors = require('cors');
// Midlewares
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
// Config
const config = require('./config');
// Router
const router = require('./network/router');

//--------------------------------------

// Midlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

// Router
router(app);
// Route Catch 404
app.use(notFoundHandler);

// Error Midlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Listen
app.listen(config.port, () => {
  console.log(`The server is listening in ${config.host}:${config.port}`);
});
