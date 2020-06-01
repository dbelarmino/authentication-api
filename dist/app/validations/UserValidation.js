"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _celebrate = require('celebrate');

const UserValidation = {
  store: _celebrate.Joi.object().keys({
    name: _celebrate.Joi.string().required().empty().messages({
      'any.required': 'The name is required.',
      'string.empty': 'The name is required.'
    }),
    email: _celebrate.Joi.string().email().required().empty().messages({
      'any.required': 'The e-mail is required.',
      'string.empty': 'The e-mail is required.',
      'string.email': 'E-mail is invalid.'
    }),
    password: _celebrate.Joi.string().required().min(8).empty().messages({
      'any.required': 'The password is required.',
      'string.empty': 'The password is required.',
      'string.min': 'The password must be at least 8 characters long.'
    })
  })
}

exports. default = UserValidation
