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
    type:String
  },
  otherType: {
    type:String
  },
  channelType: {
    type:String
  },
  otherChannel: {
    type:String
  },
  emailCode:{
    type:String
  },
  verified: {
    type:Boolean,
    default:false
  },
  settings: {
    speed:{
      type:Number
    },
    useExposure: {
      type:Boolean
    }
  },
  sessionData: [
    {
      iteration:{
        type:Number,
        suds:[
          {
            type:Number
          }
        ],
      }
    }
  ]
},
{
  timestamps:true
}
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
