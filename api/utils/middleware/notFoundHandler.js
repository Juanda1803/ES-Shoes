const boom = require('@hapi/boom');

// funcion para error 404
const notFoundHandler = (req, res) => {
  // La respuesta formateada con el error tipo boom
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode);
  res.json(payload);
};

module.exports = notFoundHandler;
