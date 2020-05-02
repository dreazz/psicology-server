const express = require('express');
const router = express.Router();
const Form = require('../models/form');
const mongoose = require('mongoose')


router.post("/", (req, res, next) => {

  const { age, body, email, experience, feeling, gender, name, phone, time } = req.body.answers
  Form.create({
    userId: mongoose.Types.ObjectId(),
    userName: name,
    userEmail: email,
    userAge: age,
    userPhone: phone,
    userGender: gender,
    userTherapyReason: feeling,
    userPyshicalHealth: body,
    userExperience: experience,
    sessionDate: time,
    timestamp: Date.now()
  }).then(data => res.status(200).json({ responseBody: data }))
    .catch(err => res.status(500).json({ responseBody: err }))
})



module.exports = router;