import UserModel from "../Model/userModel.js";
import { createUserSchema } from "../Schema/userSchema.js";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { error } from "node:console";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = createUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
  }
  const { name, email, password } = result.data;
  // check if a user is existing
  const isUser = await UserModel.findOne({ email });
  if (isUser) {
    return res.json({ message: "User already exist!!" });
  }
  //hash the password of the user
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = new UserModel({ password: hashPassword, name, email });
    const saveduser = await newUser.save();
    return res.json({ message: "You are successfully registered" });
  } catch (error: any) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //check if user is existing or not
  const isUser = await UserModel.findOne({ email }).populate("cart.product");
  if (!isUser) {
    return res.json({ message: "User does not exist" });
  }
  //confirm the password of the user
  const isPassword = bcrypt.compareSync(password, isUser.password);
  if (!isPassword) {
    return res.json({ message: "Password is not correct" });
  }
  try {
    const payload = { userId: isUser.id, name: isUser.name, role: isUser.role };
    const token = jwt.sign(payload, process.env.SIG_SECRET as string);
    res.cookie("token", token);
    return res.json(isUser);
  } catch (error) {
    error;
  }
};
