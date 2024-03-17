import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};
const generateToken = (data) => {
  const token = sign({ ...data }, process.env.privateKey, {
    // algorithm: ''
    expiresIn: "24h",
  });

  return token;
};
const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
export { generateToken, hashPassword, verifyPassword };
