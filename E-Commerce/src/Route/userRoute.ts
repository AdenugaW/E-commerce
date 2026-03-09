import express from "express";
import { createUser, loginUser } from "../Controller/userController.js";
import { Router } from "express";

const route = Router();

route.post("/User", createUser);
route.post("/User/login", loginUser);

export default route;
