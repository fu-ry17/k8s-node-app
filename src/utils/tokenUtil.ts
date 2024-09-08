import jwt from "jsonwebtoken";

export const generateToken = (data: object, secret: string) => {
  return jwt.sign(data, secret);
};
