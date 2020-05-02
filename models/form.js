const mongoose = require('mongoose');

const { Schema } = mongoose;

const formSchema = new Schema({
  userId: { type: mongoose.ObjectId, unique: true, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userAge: { type: Number, required: true },
  userPhone: { type: String, required: true },
  userGender: { type: String, required: true },
  userTherapyReason: { type: String, required: true },
  userPyshicalHealth: { type: String, required: true },
  userExperience: { type: String, required: true },
  sessionDate: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;