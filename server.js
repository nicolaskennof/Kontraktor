const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

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

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)


// Connect to the Mongo DB



// Define API routes here


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/kontratado";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

// Send every other request to the React app
// Define any API routes before this runs
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
