import express from "express";
import mongoose from "mongoose";
import userRoute from "./Route/userRoute.js";
import productRoute from "./Route/productsRoute.js";
import env from "dotenv";
import cookieParser from "cookie-parser";
env.config();
const PORT = process.env.PORT || 4000;
mongoose
    .connect(process.env.LIVE_DB)
    .then(() => console.log("Mongoose connected successfully!"))
    .catch((error) => console.error(error));
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use((error, req, res, next) => {
    console.error(error);
    res
        .status(error.status || 500)
        .json({ message: error.message || "server error" });
});
app.listen(PORT, () => {
    console.log("App is running");
});
//# sourceMappingURL=index.js.map