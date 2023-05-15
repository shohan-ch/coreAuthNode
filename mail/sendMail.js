const nodeMailer = require("nodemailer");
module.exports = async (mailHtml, mailAddress) => {
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
    to: mailAddress,
    subject: "Email verify code",
    text: "Email verification code",
    html: mailHtml,
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
