const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema (
{
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  },
  userType:{
    type:String,
    default:'patient',
    required:true
  },
  otherType: {
    type:String,
    default:'other'
  },
  emailCode:{
    type:String
  },
  verified: {
    type:Boolean,
    default:false
  }
},
{
  timestamps:true
}
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
