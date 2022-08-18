const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Role provide username'],
  },
  description: {
    type:String,
    require: [true, 'must provide Description']
  },
  status:{
    type: Boolean,
    default:true
  },
  versionKey: false 
})

module.exports = mongoose.model('Role', UserSchema)
