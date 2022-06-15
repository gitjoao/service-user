import { Document, Schema } from 'mongoose'
import { User } from '../entities/User'
import { mongosseConnection } from './connect'

export interface IUserModel extends User, Document {
  id: string
}

const schema = new Schema<IUserModel>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: String
},
{
  autoCreate: true,
  timestamps: true,
})

export const UserModel = mongosseConnection.model<IUserModel>(
  'Users', schema, 'Users'
)

