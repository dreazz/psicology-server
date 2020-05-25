const mongoose = require('mongoose');

const { Schema } = mongoose;

const formSchema = new Schema({
    userId: { type: mongoose.ObjectId, unique: true, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    timestamp: { type: Date, required: true },
});

const UserForm = mongoose.model('UserForm', formSchema);

module.exports = UserForm;