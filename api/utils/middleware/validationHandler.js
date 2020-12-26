const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

// Validacion
// Data que va a validar y el schema
const validate = (data, schema) => {
  // Obtenemos un error en caso que el schema no sea valido con la data
  const { error } = joi.object(schema).validate(data);
  return error;
};

// Validamos el error
const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    // Nos devuelve el error de que los datos no son validos
    error ? next(boom.badRequest(error)) : next();
  };
};

module.exports = {
  validationHandler,
};
