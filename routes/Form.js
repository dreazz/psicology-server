const express = require('express');
const router = express.Router();
const Form = require('../models/form');
const mongoose = require('mongoose')


router.post("/", function (req, res, next) {
  const { name, email, userMessage, time, feeling, intensity, experience } = req.body.answers
  Form.create({
    userId: mongoose.Types.ObjectId(),
    userName: name,
    userEmail: email,
    userMessage: userMessage,
    answers: {
      feeling,
      intensity,
      experience
    },
    sessionDate: time,
    timestamp: Date.now()
  }, (err, small) => err ? res.json({ errorDescription: err, errorCode: 500 }) : res.status(200))
})



module.exports = router;