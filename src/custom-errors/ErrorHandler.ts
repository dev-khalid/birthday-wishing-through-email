import { Request, Response, NextFunction } from "express";
import BaseResponse from "./BaseResponse";
export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseResponse) {
    res.json({
      message: err.message,
      statusCode: err.statusCode,
      isOperational: err.isOperational,
    });
  } else {
    console.log("Unknown error: ", err);
  }
};
