"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class SessionController {
   async store (req, res) {
    const { email, password } = req.body
    try {
      const user = await _User2.default.findOne({ email })

      if (!user) res.status(400).json({ error: 'email not found.' })

      if (!await _bcryptjs2.default.compare(password, user.password)) return res.status(400).json({ error: 'incorrect email or password.' })

      user.password = undefined

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: 'An error occurred, try again.' })
    }
  }
}

exports. default = new SessionController()
