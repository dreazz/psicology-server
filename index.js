const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config({ path: '.env' });

//Connect mongoose
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log(`Connected to Mongo! Database name: "${data.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

//ROUTES url require
const Form = require("./routes/Form");

//Routes configuration
app.use("/form", Form);


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});