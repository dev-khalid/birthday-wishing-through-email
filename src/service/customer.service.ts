import moment from "moment";
import AppDataSource from "../config/db-config";
import { Customer } from "../entities/customer";

class CustomerService {
  constructor() {
    console.log("🚀Initialized CustomerService");
  }
  async createCustomer(body: Customer) {
    const data = await AppDataSource.getRepository(Customer).insert(body);
    return {
      ...data.generatedMaps?.[0],
      ...body,
    };
  }

  async findCustomersByBirthday(birthday: Date): Promise<Customer[]> {
    let date = moment(birthday).format("MM-DD");
    return await AppDataSource.getRepository(Customer)
      .createQueryBuilder()
      .where(`substring(birthday,6,5) = '${date}'`)
      .select('id as id,name as name, email as email')
      .execute();
  }
}

export default CustomerService;
