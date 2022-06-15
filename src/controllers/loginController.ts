import Container from 'typedi'
import { validate } from 'validate.js'
import { LoginUseCase } from '../useCases/loginUseCase'
import { ErrorConstants } from './errors/ErrorsConst'
import { Input, InputValidation } from './serializers/login/input'
import { Output } from './serializers/login/output'

export class LoginController {

  async run (input: Input): Promise<Output> {
    const output = new Output()
    const validationInput = validate(input, InputValidation)
    if (validationInput) {
      output.statusCode = 400
      output.body = {
        code: ErrorConstants.MISSING_MANDATORY_PARAMETERS.code,
        message: ErrorConstants.MISSING_MANDATORY_PARAMETERS.message,
        arguments: [validationInput]
      }
    } else {
      try {
        const useCase = Container.get(LoginUseCase)
        const response = await useCase.run(input)
        output.statusCode = 200
        output.body = response
      } catch (error) {
        output.statusCode = 400
        output.body = error
      }
    }
    return output
  }
}