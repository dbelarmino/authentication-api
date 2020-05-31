import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import User from '../schemas/User'

class SessionController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })

      if (!user) res.status(400).json({ error: 'email not found.' })

      if (!await bcrypt.compare(password, user.password)) return res.status(400).json({ error: 'incorrect email or password.' })

      user.password = undefined

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: 'An error occurred, try again.' })
    }
  }
}

export default new SessionController()
