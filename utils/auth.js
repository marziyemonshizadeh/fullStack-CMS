import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

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
const verifyToken = (token) => {
  try {
    const validationResult = verify(token, process.env.privateKey);
    return validationResult;
  } catch (err) {
    console.log("verify token error =>", err);
    return false;
  }
};
export { generateToken, hashPassword, verifyPassword, verifyToken };
