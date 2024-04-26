import { Request, Response, NextFunction } from "express";
import BaseResponse from "./BaseResponse";
import {
  InsertValuesMissingError,
  QueryFailedError,
  TypeORMError,
} from "typeorm";
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
  } else if (err instanceof TypeORMError) {
    console.log("Database error: ", err.message);
    res.json({
      message: err?.message,
      statusCode: 400,
      isOperational: true,
    });
  } else {
    console.log("Unknown error: ", err);
    res.json({
      message: "Internal server error",
      statusCode: 500,
      isOperational: true,
    });
  }
};
