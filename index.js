const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors')



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

  console.log(process.env.CORS)
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","https://pisco-javi.netlify.app" ); // update to match the domain you will make the request from
   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
  
   // Pass to next layer of middleware
   next();
  });
//ROUTES url require
const Form = require("./routes/Form");

//Routes configuration
app.use("/form", Form);


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});