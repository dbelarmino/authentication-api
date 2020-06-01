"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async store (req, res) {
    const { email } = req.body

    try {
      let user = await _User2.default.findOne({ email })

      if (user) return res.status(400).json({ error: 'email is already registered' })

      user = await _User2.default.create(req.body)

      user.password = undefined

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: 'An error occurred, try again.' })
    }
  }
}

exports. default = new UserController()
