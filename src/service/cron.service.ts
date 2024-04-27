import cron from "node-cron";
import CustomerService from "./customer.service";
import moment from "moment";
import { ISO_DATE_FORMAT, JOB_NAMES } from "../constants";
import { BirthdayWishTemplate } from "../email-templates/birthday-email";
import EmailService from "./email.service";
import { TEmailContext } from "../types";
import queueServiceInstance from "./queue.service";
const every30seconds = "*/30 * * * * *";
const EveryNight12Am = "0 0 0 * * *";
class CronService {
  private readonly emailService = new EmailService();
  private readonly customerService = new CustomerService();

  constructor() {
    setTimeout(() => {
      this.birthdayWishTask();
    }, 5000);
    cron.schedule(EveryNight12Am, () => {
      this.birthdayWishTask();
    });
  }

  async birthdayWishTask() {
    let currentDate = moment().format(ISO_DATE_FORMAT);
    let birthdayGuys = await this.customerService.findCustomersByBirthday(
      currentDate as unknown as Date
    );
  
    //construct emails ...
    let emailContexts: TEmailContext[] = birthdayGuys?.map((item) => {
      //There is a possibility to make the template dynamic with npm package like hanldbars.
      return {
        to: item?.email,
        emailTemplate: BirthdayWishTemplate?.replace(
          "{customer_name}",
          item.name
        ),
      };
    });
    //Instead of sending directly to email-sender first we will send it to queue and it will handle it efficiently from there.
    // emailContexts?.forEach((item) => {
    //   this.emailService.mimicSendingEmail(item);
    // });
    queueServiceInstance.assignToQueue(JOB_NAMES.SEND_EMAIL, emailContexts);
  }
}

export default CronService;
