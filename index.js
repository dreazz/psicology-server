const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config({ path: '.env' });

var whitelist = ['http://localhost:8000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
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

console.log("HIII")

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});