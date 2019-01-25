const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors());





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
