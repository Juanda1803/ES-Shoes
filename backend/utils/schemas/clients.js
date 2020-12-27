const joi = require('@hapi/joi');

// Degine a ruler with an expression regular
const clientIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const clientNameSchema = joi.string().max(80);
const clientTypeOfArrangementSchema = joi.string().max(80);
const clientValueSchema = joi.number().min(500).max(100000);
const clientPaymentSchema = joi.number().min(500).max(100000);
const clientPhoneSchema = joi.number().min(10);
const clientDescriptionSchema = joi.string().max(300);
const clientDateSchema = joi.date().greater('2020-01-01');

// Schema for created a client
const createClientSchema = {
  name: clientNameSchema.required(),
  typeOfArrangement: clientTypeOfArrangementSchema.required(),
  value: clientValueSchema.required(),
  payment: clientPaymentSchema.required(),
  phone: clientPhoneSchema.required(),
  description: clientDescriptionSchema,
  date: clientDateSchema.required(),
};

// Schema for updated a client
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
