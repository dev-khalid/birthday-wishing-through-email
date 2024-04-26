import { Customer } from "../entities/customer";
import AppDataSource from "../config/db-config";
class CustomerService {
  constructor() {
    console.log("🚀Initialized CustomerService");
  }
  async createCustomer(body: Customer) {
    const data = await Customer.insert(body);
    return {
      ...data.generatedMaps?.[0],
      ...body,
    };
  }

  async findCustomersByBirthday(birthday: Date) {
    return await Customer.find({
      where: {
        birthday,
      },
    });
  }
}

export default CustomerService;
