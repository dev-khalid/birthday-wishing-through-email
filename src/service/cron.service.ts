import cron from "node-cron";
import CustomerService from "./customer.service";
import moment from "moment";
import { ISO_DATE_FORMAT } from "../constants";
import { BirthdayWishTemplate } from "../email-templates/birthday-email";
class CronService {
  private readonly emailService = new EmailService();
  private readonly customerService = new CustomerService();
  constructor() {
    cron.schedule("0 0 0 * * *", () => {
      //define task here
    });
  }

  async birthdayWishTask() {
    let currentDate = moment().format(ISO_DATE_FORMAT);
    let birthdayGuys = await this.customerService.findCustomersByBirthday(
      currentDate as unknown as Date
    );

    //construct emails ...
    let birthdayWishTemplates = birthdayGuys?.map((item) => {
      //There is a possibility to make the template dynamic with npm package like hanldbars.
      return BirthdayWishTemplate?.replace("customer_name", item.name);
    });
  }
}
