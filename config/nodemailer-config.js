require('dotenv').config();


const mailConfig = {
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
    // user:account.user,
    // pass:account.pass
  }
};

module.exports = mailConfig;
