import { Stripe } from "stripe";
import env from "dotenv";
env.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { Request, Response, NextFunction } from "express";
import orderModel from "../Model/orderModel.js";
import { success } from "zod";

export const createCheckoutSession = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { orderId } = req.body;
  if (!orderId) {
    return res.json({ message: "OrderId is required" });
  }
  const userInfo = (req as any).user;
  try {
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }
    // create lineItems
    const lineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Test Product",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ];
    // create session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.origin || "http://localhost:4000"}/payment/success?orderId=${orderId}& session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || "http://localhost:4000"}/payment/cancel?orderId=${orderId},`,
      metadata: {
        orderId: orderId.toString(),
      },
    });
    return res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (error: any) {
    console.error(error);
  }
};
