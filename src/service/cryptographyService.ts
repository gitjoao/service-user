import jwt from 'jsonwebtoken'
const bcrypt = require('bcrypt-nodejs')

export class CryptographyService {
  private readonly secret = 'hash'

  async encrypt (value: string): Promise<string> {
    return bcrypt.hashSync(value)
  }

  async compare (value: string, valueHashed: string): Promise<boolean> {
    return bcrypt.compareSync(value, valueHashed)
  }

  checkToken (token: string): any {
    return jwt.verify(token, this.secret)
  }

  decodeToken (token: string): any {
    return jwt.decode(token)
  }

  generateToken (data: any): string {
    return jwt.sign(data, this.secret, { expiresIn: 60 * 60 })
  }

}