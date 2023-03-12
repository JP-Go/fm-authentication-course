import fastify from "fastify";
import { UserRepository } from "./app/repositories/user.repository";
import { CreateUserUseCase } from "./app/use-cases/create-user-use-case";
import { LoginUserUseCase } from "./app/use-cases/login-user-use-case";
import { comparePassword, hashPassword } from "./lib/services/crypto-service";
import {
  validateCreateUserRequest,
  validateLoginRequest,
} from "./lib/services/validation-service";

export const server = fastify({});

server.post("/auth/login", async (req, rep) => {
  const validatedRequestBody = validateLoginRequest(req.body);
  if (!validatedRequestBody) {
    return rep.code(400).send({
      error: "Invalid request body. Provide email and password",
    });
  }
  const userRepository = UserRepository.getInstance();
  const user = LoginUserUseCase.execute(
    userRepository,
    validatedRequestBody,
    comparePassword
  );
  if (!user) {
    return rep.code(401).send({
      error: "Invalid credentials.",
    });
  }

  return rep.code(201).send(user.toHttp());
});

server.post("/auth/register", async (req, rep) => {
  const validatedRequestBody = validateCreateUserRequest(req.body);
  if (!validatedRequestBody) {
    return rep.code(400).send({
      error: "Invalid request body",
    });
  }
  const userRepository = UserRepository.getInstance();
  const user = CreateUserUseCase.execute(
    userRepository,
    validatedRequestBody,
    hashPassword
  );
  if (!user) {
    return rep.code(409).send({
      error: "Email already taken",
    });
  }

  return rep.code(201).send(user.toHttp());
});
