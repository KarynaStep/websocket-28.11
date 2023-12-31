const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[a-z0-9,!?\\.]{3, 255}/.test(value),
      message: (props) => `${props.value} is bad content!`,
    },
  },
  user: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
