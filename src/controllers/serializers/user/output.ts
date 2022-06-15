import { User } from "../../../entities/User"

export class Output {
  statusCode: number
  body: Success | Error
}

interface Success {
  user: User
}

interface Error {
  code: string
  message: string,
  arguments?: string[]
}