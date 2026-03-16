import express from "express";
import { createOrder } from "../Controller/orderController.js";
import { authentication } from "../Middlewares/authentication.js";
import { Router } from "express";

const route = Router();

route.post("/order", authentication, createOrder);

export default route;
