import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import CustomerService from "../service/customer.service";

/**
 * @BASE_ROUTE /api/customer
 */

class CustomerController {
  constructor(private readonly customerSerivce: CustomerService) {}

  /**
   * @ROUTE /api/customer/register
   * @METHOD POST
   * @Body {name,email,birthday}
   */
  createCustomer() {
    return asyncHandler(
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await this.customerSerivce.createCustomer(req?.body);
        res.json(result);
      }
    );
  }
}

export default CustomerController;
