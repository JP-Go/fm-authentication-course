import { userMapper } from "../mappers/user-mapper";
import { UserRepository } from "../repositories/user.repository";

export type CreateUserDTO = {
  name: string;
  email: string;
  rawPassword: string;
};

export class CreateUserUseCase {
  static execute(
    userRepository: UserRepository,
    createUserDto: CreateUserDTO,
    hashingFunction: (raw: string) => string
  ) {
    const { name, email, rawPassword } = createUserDto;
    const userExists = userRepository.existsByEmail(email);
    if (userExists) {
      return null;
    }
    const hashedPassword = hashingFunction(rawPassword);

    const user = userMapper.toDomain(name, email, hashedPassword);
    userRepository.saveUser(user);

    return user;
  }
}
