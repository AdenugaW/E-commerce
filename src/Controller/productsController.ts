import productModel from "../Model/productsModel.js";
import userModel from "../Model/userModel.js";
import { NextFunction, Request, Response } from "express";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userInfo = (req as any).user;
  const body = req.body;
  try {
    if (!(req as any).user) {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    error;
  }
  try {
    const newProduct = new productModel({
      createdBy: userInfo.userId,
      ...body,
    });
    const savedProduct = await newProduct.save();
    const populated = await savedProduct.populate("createdBy", "name");
    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: populated,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const product = await productModel.find(filter);
    return res.status(200).json({
      success: true,
      count: product.length,
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const singleProduct = await productModel
      .findById(id)
      .populate("createdBy", "name");
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not Found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        singleProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id, ...others } = req.body;
  const theProduct = await productModel.findById(id);
  if (!theProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found!",
    });
  }
  try {
    const updatedProduct = await productModel
      .findByIdAndUpdate(id, { ...others }, { new: true })
      .populate("createdBy", "name");
    return res.status(200).json({
      success: false,
      message: "Product updated successfully!",
      updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const theProduct = await productModel.findById(id);
  if (!theProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found!",
    });
  }
  try {
    await productModel.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
