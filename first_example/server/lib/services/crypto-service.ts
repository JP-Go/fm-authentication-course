import { hashSync, compareSync, genSaltSync } from "bcryptjs";

const salt = genSaltSync(10);
export const hashPassword = (rawPassword: string) => {
  const hashedString = hashSync(rawPassword, salt);
  return hashedString;
};

export const comparePassword = (rawPassword: string, hash: string) => {
  const result = compareSync(rawPassword, hash);
  return result;
};
