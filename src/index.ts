import express, { NextFunction } from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import userRoute from "./Route/userRoute.js";
import productRoute from "./Route/productsRoute.js";
import cartRoute from "./Route/cartRoute.js";
import orderRoute from "./Route/orderRoute.js";
import checkOutRoute from "./Route/CheckoutRoute.js";
import env from "dotenv";
env.config();
import cookieParser from "cookie-parser";
env.config();
const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.LIVE_DB as string)
  .then(() => console.log("Mongoose connected successfully!"))
  .catch((error) => console.error(error));

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);
app.use(checkOutRoute);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res
    .status(error.status || 500)
    .json({ message: error.message || "server error" });
});

app.listen(PORT, () => {
  console.log("App is running");
});
