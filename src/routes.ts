import { Router } from 'express'
import { celebrate, errors } from 'celebrate'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

import UserValidation from './app/validations/UserValidation'

const routes = Router()

routes.post('/sessions', SessionController.store)

routes.post('/users', celebrate({ body: UserValidation.store }), UserController.store)

routes.use(errors())

export default routes
