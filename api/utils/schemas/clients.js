const joi = require('@hapi/joi');

// Defines un regla con una exprecion regular
const clientIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const clientNameSchema = joi.string().max(50);
const clientTypeOfArrangementSchema = joi.string().max(50);
const clientValueSchema = joi.number().min(500).max(200000);
const clientPaymentSchema = joi.number().min(500).max(200000);
const clientPhoneSchema = joi.string().min(10).max(10);
const clientDescriptionSchema = joi.string().max(300);
const clientDateSchema = joi.string();

// Estructura para crear un nuevo cliente en nuestro db
const createClientSchema = {
  name: clientNameSchema.required(),
  typeOfArrangement: clientTypeOfArrangementSchema.required(),
  value: clientValueSchema.required(),
  payment: clientPaymentSchema.required(),
  phone: clientPhoneSchema,
  description: clientDescriptionSchema,
  date: clientDateSchema.required(),
};

// Estructura para actualizar una parte de la informacion del cliente
const updateClientSchema = {
  name: clientNameSchema,
  typeOfArrangement: clientTypeOfArrangementSchema,
  value: clientValueSchema,
  payment: clientPaymentSchema,
  phone: clientPhoneSchema,
  description: clientDescriptionSchema,
  date: clientDateSchema,
};

module.exports = {
  clientIdSchema,
  createClientSchema,
  updateClientSchema,
};
