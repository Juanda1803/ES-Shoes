const boom = require('@hapi/boom');
const config = require('../../config');

// Node detect a error why the function have four parameters (err,req,res,next)

// Validate if  found in develop or production
const withErrorStack = (error, stack) => {
  if (config.dev) {
    // ...error bring the error the properties and statuscode
    return { ...error, stack };
  }
  return error;
};

// Print or paint the error
const logErrors = (err, req, res, next) => {
  console.log(err);
  // Call next midleware (wrapErrors)
  next(err);
};

// We wrap all the errors so that have the struct boo,
const wrapErrors = (err, req, res, next) => {
  // Validate if error don't be boom
  if (!err.isBoom) {
    // if not is boom we mark it as boom
    next(boom.badImplementation(err));
  }
  next(err);
};

// Error Handler
const errorHandler = (err, req, res, next) => {//eslint-disable-line
  // the formatted response
  const {
    output: { statusCode, payload },
  } = err;

  // State of response of request
  res.status(statusCode);
  // Sample in format json the response as error
  res.json(withErrorStack(payload, err.stack));
};

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
