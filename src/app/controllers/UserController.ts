import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { email } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) return res.status(400).json({ error: 'email is already registered' })

      user = await User.create(req.body)

      user.password = undefined

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: 'An error occurred, try again.' })
    }
  }
}

export default new UserController()
