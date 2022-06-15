import Container from 'typedi'
import { validate } from 'validate.js'
import { CreateUserUseCase } from '../useCases/user/createUseCase'
import { ErrorConstants } from './errors/ErrorsConst'
import { Input, InputValidation } from './serializers/user/input'
import { Output } from './serializers/user/output'

export class CreateUserController {

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
        const useCase = Container.get(CreateUserUseCase)
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