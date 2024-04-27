import { Router } from "express";
import CustomerController from "../controller/customer.contorller";
import CustomerService from "../service/customer.service";
import RequestValidator from "../utils/request-validator";
import { Customer } from "../entities/customer";

const router = Router();
const customerController = new CustomerController(new CustomerService());
router.post(
  "/register",
  RequestValidator.validate(Customer),
  customerController.createCustomer()
);

export default router;
 