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
    default:'n/a'
  },
  channelType: {
    type:String,
    default:'search',
    required:true
  },
  otherChannel: {
    type:String,
    default:'n/a'
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
