import { UserRepository } from "../repositories/user.repository";

export type LoginUserDTO = {
  email: string;
  password: string;
};

export class LoginUserUseCase {
  static execute(
    userRepository: UserRepository,
    data: LoginUserDTO,
    compareFunction: (s: string, hash: string) => boolean
  ) {
    const { email, password } = data;
    const user = userRepository.findUserByEmail(email);
    if (!user) {
      return null;
    }
    const correctPassword = compareFunction(password, user.password);
    if (!correctPassword) {
      return null;
    }

    return user;
  }
}
