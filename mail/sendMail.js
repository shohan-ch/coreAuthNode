const nodeMailer = require("nodemailer");
module.exports = async () => {
  let mailCredentials = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "08241b5668d31d",
      pass: "abee7028c145c3",
    },
  };
  let mailBody = {
    from: "admin@admin.com",
    to: "shohan@shoan.com",
    subject: "Email verify code",
    text: "Email verification code",
    html: "<b>Code is 7854</b>",
  };

  let transporter = nodeMailer.createTransport(mailCredentials);
  let mailSend = await transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log(info.messageId);
  });
  console.log("Mail send.");
};
