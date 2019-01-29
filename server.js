const express = require("express");
const path = require ('path');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/kontratado";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
