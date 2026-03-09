import { Request, Response, NextFunction } from "express";

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if ((req as any).user.role === "Admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied, Admin Only!",
    });
  }
};
