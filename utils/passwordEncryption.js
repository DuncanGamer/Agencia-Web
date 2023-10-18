import * as bcrypt from "bcryptjs";

const saltRounds = 10;

export const passwordEncription = async (plainPassword) => {
  const hashPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashPassword;
};

export const checkPassword = async (passwordToCheck, hashedPassword) => {
  const check = await bcrypt.compare(passwordToCheck, hashedPassword);
  return check;
};
