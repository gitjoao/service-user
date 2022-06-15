import { User } from "../entities/User";
import { UserModel } from "../models/UserModel";

export class UserRepository {
  async create (user: User): Promise<User> {
    return UserModel.create(user)
  }
  async findByEmail (email: string): Promise<User | undefined> {
    return UserModel.findOne({email})
  }

  async findById(userId: string): Promise<User | undefined> {
    return UserModel.findById(userId)
  }
}