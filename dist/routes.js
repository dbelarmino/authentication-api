"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _celebrate = require('celebrate');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

var _UserValidation = require('./app/validations/UserValidation'); var _UserValidation2 = _interopRequireDefault(_UserValidation);

const routes = _express.Router.call(void 0, )

routes.post('/sessions', _SessionController2.default.store)

routes.post('/users', _celebrate.celebrate.call(void 0, { body: _UserValidation2.default.store }), _UserController2.default.store)

routes.use(_celebrate.errors.call(void 0, ))

exports. default = routes
