import { Request, Response, NextFunction } from "express";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import BadRequest from "../custom-errors/BadRequest";
export default class RequestValidator {
  static validate = <T>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const convertedObject = plainToInstance(
        classInstance,
        req.body
      ) as Object;
      let errors = await validate(convertedObject);
      if (errors.length > 0) {
        let rawErrors: string[] = [];
        for (const errorItem of errors) {
          rawErrors = rawErrors.concat(
            ...rawErrors,
            Object.values(errorItem.constraints ?? [])
          );
        }
        const validationErrorText = "Request validation failed!";
        console.log("error found!", rawErrors?.join(", "));
        return next(new BadRequest(rawErrors?.join(",")));
      }
      next();
    };
  };
}
