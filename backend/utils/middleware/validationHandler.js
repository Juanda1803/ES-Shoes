const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

// Validation
// Data to be validated and the schema
const validate = (data, schema) => {
  // We get an error in case that the schema be not validated with the data
  const { error } = joi.object(schema).validate(data);
  return error;
};

// We validat the error
const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    // We return the error of data not validate
    error ? next(boom.badRequest(error)) : next();
  };
};

module.exports = validationHandler;
