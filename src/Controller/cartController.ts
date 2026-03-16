import { Request, Response, NextFunction } from "express";
import userModel from "../Model/userModel.js";
import productModel from "../Model/productsModel.js";
import { config } from "dotenv";

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { productId, quantity } = req.body;
  const userInfo = (req as any).user;
  if (!productId) {
    return res.status(400).json({
      success: false,
      message: "Product Id is required!",
    });
  }

  const theProduct = await productModel.findById(productId);
  if (!theProduct) {
    return res.json(404).json({
      success: false,
      message: "Product is not found",
    });
  }
  // get the user info
  const user = await userModel.findById(userInfo.userId);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  try {
    const itemIndex = user.cart.findIndex(
      (item) => item.product?.toString() === productId,
    );
    if (itemIndex !== -1) {
      const cartItem = user.cart?.[itemIndex];
      if (cartItem) {
        cartItem.quantity += Number(quantity);
      }
    } else {
      user.cart.push({
        product: productId,
        quantity: Number(quantity),
      });
      user.markModified("cart");
    }
    await user.save();
    await user.populate({
      path: "cart.product",
      select: "name",
    });
    return res.status(200).json({
      success: true,
      message: itemIndex !== -1 ? "Quantity Updated" : "Added to cart",
      cart: user.cart,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userInfo = (req as any).user;
  const user = await userModel
    .findById(userInfo.userId)
    .populate("cart.product");

  if (!user) {
    return res.json({ message: "User not found!" });
  }
  try {
    return res.status(200).json({
      success: true,
      cart: user.cart,
      itemCount: user.cart.length,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productId = req.params.id;
  const { quantity } = req.body;
  const userInfo = (req as any).user;
  if (!productId) {
    return res
      .status(400)
      .json({ message: "Product id is required in the URL" });
  }
  if (quantity === null || quantity < 0) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be >= 0",
    });
  }
  try {
    const user = await userModel.findById(userInfo.userId);
    if (!user) {
      return res.json({ message: "Uer not found!" });
    }
    // get product index
    const itemIndex = user.cart.findIndex(
      (item) => item.product?.toString() === productId,
    );

    if (itemIndex !== -1) {
      if (quantity == 0) {
        user.cart.splice(itemIndex, 1);
      } else {
        user.cart[itemIndex]!.quantity = Number(quantity);
      }
    }
    user.markModified("cart");
    await user.save();

    return res.status(200).json({
      success: true,
      message: quantity == 0 ? "Item Removed" : "Item Updated",
      cart: user.cart,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userInfo = (req as any).user;
  // get the user
  const user = await userModel.findById(userInfo.userId);
  if (!user) {
    return res.json({ message: "User not found!" });
  }
  try {
    user.cart.pull({});
    user.markModified("cart");
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully!",
      cart: user.cart,
      itemCount: user.cart.length,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
