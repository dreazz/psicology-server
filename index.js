const express = require("express");
const app = express();
const mongoose = require('mongoose');

//Connect mongoose
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((data) => {
    console.log(`Connected to Mongo! Database name: "${data.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

//ROUTES url require
const Auth = require("./routes/Auth");

//Routes configuration
app.use("/auth", Auth);



app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});