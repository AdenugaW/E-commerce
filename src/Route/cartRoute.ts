import express from "express";

import { Router } from "express";
import {
  addToCart,
  getCart,
  updateCart,
  deleteCart,
} from "../Controller/cartController.js";
import { authentication } from "../Middlewares/authentication.js";

const route = Router();
route.post("/cart", authentication, addToCart);
route.get("/cart", authentication, getCart);
route.put("/cart/:id", authentication, updateCart);
route.delete("/cart", authentication, deleteCart);

export default route;
