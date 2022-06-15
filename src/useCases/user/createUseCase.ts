import { CreateUserDto } from "../../controllers/dto/loginDto copy"
import { ErrorConstants } from "../../controllers/errors/ErrorsConst"
import { Input } from "../../controllers/serializers/user/input"
import { User } from "../../entities/User"
import { UserRepository } from "../../repository/userRepository"
import { CryptographyService } from "../../service/cryptographyService"

export class CreateUserUseCase {
  private readonly userRepository = new UserRepository
  private readonly crypoService = new CryptographyService
  async run (input: Input): Promise<CreateUserDto> {
    let response: CreateUserDto
    const findUser = await this.userRepository.findByEmail(input.email)

    if(findUser) {
      throw ErrorConstants.EMAIL_ALREADY_EXIST
    }
    const passwordHash = await this.crypoService.encrypt(input.password)
    const newUser: User = {
      email: input.email,
      name: input.name,
      password: passwordHash
    }

    const user = await this.userRepository.create(newUser)
    if (!user) {
      throw ErrorConstants.USER_NOT_CREATE
    }
    response = {
      user: user
    }
    return response 
  }
}