// faker generate 5000 customer's information .
import { faker } from "@faker-js/faker";
import { Customer } from "../entities/customer";
import moment from "moment";
import AppDataSource from "../config/db-config";
import { uniqBy } from "lodash";

export function createRandomCustomer(): Customer {
  return {
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    birthday: moment(faker.date.birthdate()).format("YYYY-MM-DD") as unknown,
  } as Customer;
}

export const customers: Customer[] = faker.helpers.multiple(
  createRandomCustomer,
  {
    count: 5000,
  }
);

(async () => {
  let uniqueCustomers = uniqBy(customers, (customer) => customer.email);

  console.log("Running seeder...", uniqueCustomers.length);
  await AppDataSource.initialize();
  const customerRepo = AppDataSource.getRepository(Customer);
  let result = await customerRepo.insert(uniqueCustomers);
  console.log("Successfully added ", uniqueCustomers.length, " customer data.");
  console.log("Data table informations: ", result.raw);
})();
