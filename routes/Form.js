const express = require('express');
const router = express.Router();
const UserForm = require('../models/UserForm');
const ProfessionalForm = require('../models/ProfessionalForm');
const mongoose = require('mongoose')
const main = require('../helper/email')


router.post("/professional", (req, res, next) => {

  const { name, email, phone } = req.body.answers
  ProfessionalForm.create({
    userId: mongoose.Types.ObjectId(),
    userName: name,
    userEmail: email,
    userPhone: phone,
    timestamp: Date.now()
  }).then(data => {
    main()
    res.status(200).json({ responseBody: data })
  })
    .catch(err => res.status(500).json({ responseBody: err }))
})

router.post("/", (req, res, next) => {

  const { age, body, email, experience, feeling, gender, name, phone } = req.body.answers
  UserForm.create({
    userId: mongoose.Types.ObjectId(),
    userName: name,
    userEmail: email,
    userAge: age,
    userPhone: phone,
    userGender: gender,
    userTherapyReason: feeling,
    userPyshicalHealth: body,
    userExperience: experience,
    timestamp: Date.now()
  }).then(data => {
    main()
    res.status(200).json({ responseBody: data })
  })
    .catch(err => res.status(500).json({ responseBody: err }))
})


module.exports = router;