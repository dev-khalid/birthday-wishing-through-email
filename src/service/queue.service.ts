import dotenv from "dotenv";
import Agenda, {
  Job,
  JobAttributes,
  JobAttributesData,
  JobPriority,
} from "agenda";
import { faker } from "@faker-js/faker";
import { TEmailContext } from "../types";
import { JOB_NAMES } from "../constants";
dotenv.config();

class QueueService {
  private readonly agenda = new Agenda({
    db: {
      address: process.env.MONGODB_URI as string,
    },
  });
  constructor() {
    this.defineJobProcessor();

    this.init();

    //TEST:
    // setTimeout(() => {
    //   // this.assignToQueue(JOB_NAMES.SEND_EMAIL);
    // }, 10 * 1000);

    this.agenda.on("start", (job) => {
      console.log("Job %s starting", job.attrs.name, new Date());
    });
    this.agenda.on(
      `success:${JOB_NAMES.SEND_EMAIL}`,
      (job: Job<TEmailContext>) => {
        console.log(`Sent Email Successfully to ${job?.attrs?.data?.to}`);
      }
    );
    this.agenda.on(`fail:${JOB_NAMES.SEND_EMAIL}`, (err, job) => {
      console.log(`Job failed with error: ${err.message}, ${job?.failReason}`);
    });
  }

  private async init() {
    try {
      await this.agenda.start();
      console.log("Agenda started!");
    } catch (error) {
      console.log("Agenda connection error.", error);
    }
  }

  private async assignToQueueTest<T = TEmailContext>(
    jobName: JOB_NAMES,
    jobData: T
  ) {
    let emails = [];
    for (let i = 0; i < 50; i++) {
      emails.push({
        email: faker.internet.email(),
        name: faker.internet.displayName(),
        id: i + 1,
      });
      this.agenda.now(jobName, emails[i]);
    }
  }

  public async assignToQueue<T = TEmailContext>(
    jobName: JOB_NAMES,
    jobData: T | T[]
  ) {
    if (Array.isArray(jobData)) {
      jobData?.forEach((element) => {
        this.agenda.now(jobName, element as JobAttributesData);
      });
    } else {
      this.agenda.now(jobName, jobData as JobAttributesData);
    }
  }
  private async defineJobProcessor() {
    this.agenda.define(
      JOB_NAMES.SEND_EMAIL,
      { concurrency: 5, lockLimit: 5, shouldSaveResult: true },
      async (job: Job<TEmailContext>) => {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        console.log("Processed email: ", job?.attrs?.data?.to);
      }
    );
  }
}
//Singleton instance
let queueServiceInstance = new QueueService();
export default queueServiceInstance;
