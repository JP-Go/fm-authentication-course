import { z } from "zod";
import { CreateUserDTO } from "../../app/use-cases/create-user-use-case";

export const validateCreateUserRequest = (reqBody: unknown) => {
  const createUserSchema = z
    .object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })
    .transform((input) => {
      return {
        name: input.name,
        email: input.email,
        rawPassword: input.password,
      };
    });

  const parseResult = createUserSchema.safeParse(reqBody);
  if (parseResult.success) return parseResult.data satisfies CreateUserDTO;
  return null;
};

export const validateLoginRequest = (reqBody: unknown) => {
  const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const parseResult = loginUserSchema.safeParse(reqBody);
  if (parseResult.success) {
    return parseResult.data;
  }

  return null;
};
