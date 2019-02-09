const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kontratado"
);
const stateSeed = [
    {state: "Aguascalientes", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc16"), counties:[]},
    {state: "Baja California", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc17"), counties:[]},
    {state: "Baja California Sur", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc18"), counties:[]},
    {state: "Campeche", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc19"), counties:[]},
    {state: "Coahuila de Zaragoza", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1a"), counties:[]},
    {state: "Colima", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1b"), counties:[]},
    {state: "Chiapas", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1c"), counties:[]},
    {state: "Chihuahua", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1d"), counties:[]},
    {state: "Distrito Federal", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1e"), counties:[]},
    {state: "Durango", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1f"), counties:[]},
    {state: "Guanajuato", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc20"), counties:[]},
    {state: "Guerrero", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc21"), counties:[]},
    {state: "Hidalgo", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc22"), counties:[]},
    {state: "Jalisco", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc23"), counties:[]},
    {state: "México", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc24"), counties:[]},
    {state: "Michoacán de Ocampo", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc25"), counties:[]},
    {state: "Morelos", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc26"), counties:[]},
    {state: "Nayarit", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc27"), counties:[]},
    {state: "Nuevo León", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc28"), counties:[]},
    {state: "Oaxaca", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc29"), counties:[]},
    {state: "Puebla", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2a"), counties:[]},
    {state: "Querétaro", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2b"), counties:[]},
    {state: "Quintana Roo", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2c"), counties:[]},
    {state: "San Luis Potosí", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2d"), counties:[]},
    {state: "Sinaloa", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2e"), counties:[]},
    {state: "Sonora", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc2f"), counties:[]},
    {state: "Tabasco", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc30"), counties:[]},
    {state: "Tamaulipas", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc31"), counties:[]},
    {state: "Tlaxcala", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc32"), counties:[]},
    {state: "Veracruz", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc33"), counties:[]},
    {state: "Yucatán", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc34"), counties:[]},
    {state: "Zacatecas", _id:mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc35"), counties:[]},
];

db.State
  .remove({})
  .then(() => db.State.collection.insertMany(stateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 


