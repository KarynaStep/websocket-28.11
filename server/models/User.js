const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[A-z0-9]{3,32}/.test(value),
      message: (props) => `${props.value} is bad login!`,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[A-Za-z0-9]{3,32}/.test(value),
      message: (props) => `${props.value} is bad login!`,
    },
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
