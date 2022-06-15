import { LoginDto } from "../controllers/dto/loginDto";
import { ErrorConstants } from "../controllers/errors/ErrorsConst";
import { Input } from "../controllers/serializers/login/input";
import { UserRepository } from "../repository/userRepository";
import { CryptographyService } from "../service/cryptographyService";

export class LoginUseCase {
  private readonly userRepository = new UserRepository
  private readonly crypoService = new CryptographyService
  async run (input: Input): Promise<LoginDto> {
    let response: LoginDto
    
    const user = await this.userRepository.findByEmail(input.email)

    if(!user) {
      throw ErrorConstants.INVALID_LOGIN
    } 
    const validPassword = await this.crypoService.compare(input.password, user.password)
    if(!validPassword) {
      throw ErrorConstants.INVALID_LOGIN
    }
    const dataToken = {
      email: user.email,
      name: user.name,
      id: user["_id"]
    }
    const token = this.crypoService.generateToken(dataToken)
    response = {
      token: token
    }
    return response
  }
}