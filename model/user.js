const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must provide username'],
    trim: true,
  },
  email: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
  },
  status:{
    type: Boolean,
    default:true
  },
  block_status:{
    type: Boolean,
    default:true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  role:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  create_at:{
    type: Date,
		default: Date.now,
  },
  versionKey: false 
})

module.exports = mongoose.model('User', UserSchema)
