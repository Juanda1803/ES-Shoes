const boom = require('@hapi/boom');
const { config } = require('../../config');

// Validacion si nos encontramos en desarollo o produccion
const withErrorStack = (error, stack) => {
  if (config.dev) {
    // ...error trae el error las propiedades y el statusCode
    return { ...error, stack };
  }
  return error;
};

// Imprime o pinta el error
const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

// Envolvemos todos los errores para que tengan la estructura boom
const wrapErrors = (err, req, res, next) => {
  // Validamos si el error no es boom
  if (!err.isBoom) {
    // Si no es boom lo marcamos como boom
    next(boom.badImplementation(err));
  }
  next(err);
};

// Manejador de error
const errorHandler = (err, req, res, next) => {
  // La respuesta formateada
  const {
    output: { statusCode, payload },
  } = err;

  // Estado de la respuesta de la peticion
  res.status(statusCode);
  // Muestra en formato json la respuesta como error
  res.json(withErrorStack(payload, err.stack));
};

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
