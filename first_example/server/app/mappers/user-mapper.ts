import { User } from "../entities/User";

export const userMapper = {
  toDomain(name: string, email: string, hashedPassword: string) {
    return new User(name, email, hashedPassword);
  },
};
