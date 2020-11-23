const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  // Put your User Schema here
});

module.exports = mongoose.model('User', UserSchema);
