import { User } from "../entities/User";

export class UserRepository {
  private users: User[] = [];
  private static instance: UserRepository = new UserRepository();

  constructor() {}

  static getInstance() {
    return UserRepository.instance;
  }

  findUserByEmail(email: string) {
    return this.users.find((user) => user.email === email) ?? null;
  }

  existsByEmail(email: string) {
    return this.findUserByEmail(email) !== null;
  }

  saveUser(user: User): void {
    this.users.push(user);
  }

  get dump() {
    return this.users;
  }
}
