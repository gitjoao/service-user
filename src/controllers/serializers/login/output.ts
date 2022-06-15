export class Output {
  statusCode: number
  body: Success | Error
}

interface Success {
  token: string
}

interface Error {
  code: string
  message: string,
  arguments?: string[]
}