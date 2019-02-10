const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kontratado"
);

const ProfessionSeed = [
  { profession: "Plomero", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212432") },
  { profession: "Techador", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212433") },
  { profession: "Electricista", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212434") },
  { profession: "Jardinero", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212435") },
  { profession: "Paisajista", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212436") },
  { profession: "Limpiador", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212437") },
  { profession: "Remodelador", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212438") },
  { profession: "Pintor", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac212439") },
  { profession: "Mantenedor", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac21243a") },
  { profession: "Fumigador", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac21243b") },
  { profession: "Instalador de aire acondicionado", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac21243c") },
  { profession: "Reparator de aire acondicionado", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac21243d") },
  { profession: "Cuidador de perro", _id: mongoose.mongo.ObjectId("5c5cd03964456033ac21243e") },
]

db.Profession
  .remove({})
  .then(() => db.Profession.collection.insertMany(ProfessionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });
