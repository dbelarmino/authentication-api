import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

import UserInterface from '../interfaces/UserInterface'

export interface UserModel extends UserInterface, Document{};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

export default model<UserModel>('User', UserSchema)
