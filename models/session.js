const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
  sessionId: { type: mongoose.ObjectId, unique: true, required: true },
  userId: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;