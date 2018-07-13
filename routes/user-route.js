const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const nodemailer = require('nodemailer');
const validator    = require('email-validator');
const fs = require('fs');
const stream = require('stream');
const router = express.Router();
require('dotenv').config();

const UserModel = require('../models/user-model');

const mailConfig = require('../config/nodemailer-config.js');

// email templates for signup/verification
const investorEmail = './email-templates/investor.html';
const patientEmail = './email-templates/patient.html';
const verifyEmail = './email-templates/verify.html';

// GET all users
router.get('/list/', (req, res, next) => {
  UserModel.find((err, userList) => {
    if (err) {
      res.json(err);
      return;
    }
    else if (!req.user || req.user.userType != 'admin') {
      res.json("users not available");
      return;
    }
    res.status(200).json(userList);
  });
});

// POST signup
router.post('/signup', (req, res, next) => {
  if(!req.body.firstName || !req.body.lastName||
     !req.body.email || !req.body.userType || !req.body.channelType) {
       res.status(400).json({message:'All fields are required'});
       console.log('asdasdasd');
       return;
  }
  UserModel.findOne(
    {email:req.body.email},
    (err, user) => {
      if (err) {
        res.status(500).json({message:'Server error'});
        return;
      }
      else if (user) {
        res.status(400).json({message:'Email is already subscribed'});
        return;
      }
      else if (!validator.validate(req.body.email)) {
        res.status(400).json({message:'Please enter a valid email'});
        return;
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = '';
      if (!req.body.password) {
        hashedPassword = bcrypt.hashSync('123', salt);
      }
      else {
        hashedPassword = bcrypt.hashSync(req.body.password, salt);
      }
      const newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password:hashedPassword,
        userType:req.body.userType,
        otherType:req.body.otherType,
        channelType:req.body.channelType,
        otherChannel:req.body.otherChannel,
        emailCode:randomDigits()
      });
      newUser.save((err) => {
        if (err) {
          console.log(err);
          console.log(newUser);
          res.status(500).json({message:'User server error'});
          return;
        }
        // sendText(newUser.email, newUser.userType, newUser.channelType);
        sendMail(newUser);
        newUser.password = undefined;
        // send users info to front end except password ^
        res.status(200).json(newUser);
      });
    }
  );
});


router.post('/verify', (req, res, next) => {
  if (req.body.emailCode.length != 6) {
    res.status(400).json({message:'The code is missing a few numbers'});
    return;
  }
  else {
    UserModel.findOne(
      {emailCode:req.body.emailCode},
      (err, user) => {
        if (err) {
          res.status(400).json({message:'The code is incorrect. Please try again.'});
          return;
        }
        if (user) {
          console.log('😃 😃 😃 😃 😃 😃 😃 😃');
          console.log(user);
          user.verified = true;
          user.save((err) => {
            if (err) {
              console.log(err);
              res.status(500).json({message:'User server error'});
              return;
            }
            console.log(' 🚘 🚘 🚘 🚘 🚘 🚘 🚘 🚘 🚘 🚘');
            console.log(user);
            user.password = undefined;
            // send users info to front end except password ^
            res.status(200).json(user);
          });
          return;
        }
      }
    );
  }
  // end post request
});

// POST login
// passport.authenticate redirects (API should not)
router.post('/login', (req, res, next) => {
  const authenticateFunction =
    passport.authenticate('user', (err, user, strategyInfo) => {
      if(err) {
        console.log('first');
        res.status(500).json({message:'Unknown login error'});
        return;
      }
      // login failed
      if (!user) {
        console.log('second');
        res.status(401).json(strategyInfo);
        return;
      }
      // login success
      req.login(user, (err) => {
        if (err) {
          console.log('third');
          console.log(err);
          res.status(500).json({message:'Session save error'});
          return;
        }
        else if (user.userType != 'admin') {
          console.log('fourth');
          res.status(400).json({message:'You are not an admin'});
          return;
        }
        user.password = undefined;
        // everything works
        res.status(200).json(user);
        return;
      });
    });
    authenticateFunction(req, res, next);
});

router.get('/checklogin', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message:'You are not logged in'});
    return;
  }
});

// POST update user
router.post('/update/:myId', (req, res, next) => {
  // console.log(req.params.myId);
  UserModel.findByIdAndUpdate(req.params.myId,
    {
      email:req.body.email
    },
    (err, user) => {
      if(err) {
        res.status(500).json({message:'server error'});
        return;
      }
      res.status(200).json({message:'patient updated'});
      return;
    }
  );
});

// POST delete user
router.post('/delete/:myId', (req, res, next) => {
  // console.log(req.params.myId);
  UserModel.findByIdAndRemove(req.params.myId,
    (err, patientEntry) => {
        if (err) {
          // next(err);
          res.status(500).json({message:'Find'});
          console.log(patientEntry);
          return;
        }
        if (!patientEntry) {
          res.status(400).json({message:'patient does not exist'});
          return;
        }
        res.status(200).json({message:patientEntry.firstName + ' deleted'});
        return;
  });
});

function randomDigits() {
  let numStr = "";
  for (let i = 0; i < 6; i++) {
    numStr += (Math.round(Math.random()*(9)));
  }
  return numStr;
}

function insertDataIntoTemplate(template) {

}

function getEmailType(user) {
  let subject = '', html = '';
  if (user.verified) {
    subject = 'EMDR VR Update';
    switch(user.userType) {
      case 'patient':
        html = patientEmail;
        break;
      case 'investor':
        html = investorEmail;
        break;
      case 'other':
        html = investorEmail;
        break;
    }
  } else {
    subject = 'EMDR VR Verification';
    html = '';
  }
  return [subject, html];
}

function sendMail(user) {
  let subject = getEmailType(user)[0];
  let template = getEmailType(user)[1];
  console.log('😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀');
  console.log(template);
  console.log(subject);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(mailConfig);
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Jarrod, EMDR VR" <jarrod@emdrvr.com>', // sender address
    to: user.email,
    subject: subject, // Subject line
    // text: code // plain text body
    html: template  // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

function sendText(email, type, channel) {

  // Twilio Credentials
let accountSid = process.env.ACCOUNT_NUM;
let authToken = process.env.AUTH_TOKEN;

//require the Twilio module and create a REST client
let client = require('twilio')(accountSid, authToken);

UserModel.find((err, userList) => {
  if (err) {
    console.log(err);
    return;
  }
  client.messages.create({
    to: process.env.MY_NUMBER,
    from: process.env.FROM_NUMBER,
    body: "\n New subscriber: " + email + "\n" +
    "Type: " + type + "\n" +
    "Channel: " + channel + "\n"
  },
  function(err, message) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(message.sid);
    return;
  });
});



}

module.exports = router;
