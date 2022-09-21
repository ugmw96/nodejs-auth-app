const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max:256
  },
  email: {
    type: String,
    require:true,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 1024
  },
  date: {
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('User', userSchema);