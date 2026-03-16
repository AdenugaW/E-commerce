import express from "express";
import { createCheckoutSession } from "../Controller/checkOutController.js";
import { authentication } from "../Middlewares/authentication.js";
import { Router } from "express";

const route = Router();

route.post("/Checkout", createCheckoutSession);

export default route;
