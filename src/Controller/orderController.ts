import { Request, Response, NextFunction } from "express";
import userModel from "../Model/userModel.js";
import orderModel from "../Model/orderModel.js";
import productModel from "../Model/productsModel.js";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { shippingAddress, ...others } = req.body;
  const userInfo = (req as any).user;
  try {
    const user = await userModel.findById(userInfo.userId);
    if (!user || user.cart.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty!",
      });
    }

    const item = user.cart.map((item: any) => ({
      product: item.Product._id,
      quantity: item.quantity,
    }));

    if (!shippingAddress) {
      return res.json({ message: "Shipping Address is required!" });
    }

    const newOrder = new orderModel({
      shippingAddress,
      item,
    });
    await newOrder.save();
    // clear cart after ordering
    user.cart.pull({});
    user.markModified("cart");
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Order created successfully",
      newOrder,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
