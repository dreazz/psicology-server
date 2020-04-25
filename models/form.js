const mongoose = require('mongoose');

const { Schema } = mongoose;

const formSchema = new Schema({
  userId: { type: mongoose.ObjectId, unique: true, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userMessage: { type: String, required: true },
  answers: { type: Object, required: true },
  sessionDate: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;