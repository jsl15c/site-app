const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const UserModel = require('../models/user-model.js');

// save the users ID in the bowl (called when user logs in)
passport.serializeUser((user, next) => {
  // null in 1st arg mean no error
  next(null, user._id);
});

// retrieve the users info from the db with the id
// we got from the bowl (session)
passport.deserializeUser((id, done) => {
   UserModel.findById(id, (err, user) => {
     // error handling
     if(err) {
       done(err);
       return;
     }
     // if user exists
      done(null, user);
      return;
  });
});

// USER email and password login Strategy
passport.use('user', new LocalStrategy(
  {
    usernameField:'email',  // sent through AJAX from Angular
    passwordField:'password' // sent through AJAX from Angular
  },
  (email, password, next) => {
    UserModel.findOne(
      {email:email},
      (err, user) => {
        if (err) {
          next(err);
          return;
        }

        if (user === null) {
          next(null, false, {message:'Incorrect email'});
          return;
        }

        if(bcrypt.compareSync(password, user.password) === false) {
          next(null, false, {message:'Incorrect password'});
          return;
        }
        // if no errors, returns patient and logs in
        next(null, user);
      }
    );
  }
)
);
