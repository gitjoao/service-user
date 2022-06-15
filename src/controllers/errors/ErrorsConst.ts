export class ErrorConstants {
  static MISSING_MANDATORY_PARAMETERS = {
    code: `AUTH-000`,
    message: `Missing parameters`
  }
  static INVALID_LOGIN = {
    code: `AUTH-001`,
    message: `Invalid login`
  }
  static EMAIL_ALREADY_EXIST = {
    code: `USR-001`,
    message: `Email already exist`
  }
  static USER_NOT_CREATE = {
    code: `USR-002`,
    message: `Erro on create user`
  }
}