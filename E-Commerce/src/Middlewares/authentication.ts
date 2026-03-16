import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = (req as any).cookies?.token;
  if (!token) {
    return res.json({ message: "You are not authenticated!" });
  }
  try {
    const userInfo = jwt.verify(token, process.env.SIG_SECRET as string);
    (req as any).user = userInfo;
  } catch (error) {
    return res.send(error);
  }

  next();
};

export default authentication;
