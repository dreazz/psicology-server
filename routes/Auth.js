const express = require('express');
const router = express.Router();
const Session = require('../models/session');

router.get("/", function (req, res) {
  res.send("Hello World Auth!");
});

router.post("/validateToken", function (req, res, next) {
  
})

router.post("/login", function (req, res, next) {

})

router.post("/register", function (req, res, next) {

})

router.post("/logout", function (req, res, next) {

})


module.exports = router;