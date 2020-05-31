import { Joi } from 'celebrate'

const UserValidation = {
  store: Joi.object().keys({
    name: Joi.string().required().empty().messages({
      'any.required': 'The name is required.',
      'string.empty': 'The name is required.'
    }),
    email: Joi.string().email().required().empty().messages({
      'any.required': 'The e-mail is required.',
      'string.empty': 'The e-mail is required.',
      'string.email': 'E-mail is invalid.'
    }),
    password: Joi.string().required().min(8).empty().messages({
      'any.required': 'The password is required.',
      'string.empty': 'The password is required.',
      'string.min': 'The password must be at least 8 characters long.'
    })
  })
}

export default UserValidation
