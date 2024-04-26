type TMailData = {
  from: string;
  to: string;
  subject: string;
  html: string;
};
class EmailService {
  constructor() {
    this.mimicConnectionPool();
  }
  send(mailData: TMailData) {
    return new Promise((resolve) => {
      let randomTimeInSeconds = Math.random() * 3 + 1;
      setTimeout(() => {
        let successMessage = `Email sent to ${mailData?.to}. Took ${randomTimeInSeconds} seconds.`;
        console.log(successMessage);
        resolve(successMessage);
      }, randomTimeInSeconds * 1000);
    });
  }
  mimicConnectionPool() {
    return true;
  }
  async mimicSendingEmail(to: string, emailTemplate: string) {
    const mailData: TMailData = {
      from: "team@teamfriends.co.jp", // sender address
      to, // list of receivers
      subject: `Happy Birthday!`,
      html: emailTemplate,
    };
    return await this.send(mailData);
  }
}
