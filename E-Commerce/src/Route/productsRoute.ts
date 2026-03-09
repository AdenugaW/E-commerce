import express from "express";
import {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../Controller/productsController.js";
import { authentication } from "../Middlewares/authentication.js";
import { adminOnly } from "../Middlewares/Admin.js";
import { Router } from "express";

const route = Router();

route.post("/Product", authentication, adminOnly, createProduct);
route.get("/Product", getProduct);
route.get("/Product/:id", getSingleProduct);
route.put("/Product", authentication, adminOnly, updateProduct);
route.delete("/Product/:id", authentication, adminOnly, deleteProduct);

export default route;
