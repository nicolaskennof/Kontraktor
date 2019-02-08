const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kontratado"
);

const kontratadoSeed = [
  {
    _id: mongoose.mongo.ObjectID("5c50dd7e2e135134edee9a47"),
    reviews: [
      mongoose.mongo.ObjectID("5c50e17ce850f73788c93b26")
    ],

    hires: [
      mongoose.mongo.ObjectID("5c50e49286ba6539a6ba05ac")
    ],
    messages: [
      mongoose.mongo.ObjectID("5c50e2cdf523b138be3dee68"),
      mongoose.mongo.ObjectID("5c50e67618f97b3b625de080")
    ],
    costRates: [
      mongoose.mongo.ObjectID("5c50df87ff467935f0f4e56e")
    ],
    qualityRates: [
      mongoose.mongo.ObjectID("5c50e43eeabd4b39537efaf2")
    ],
    firstName: "Francisco",
    lastName: "Gonzalez",
    userName: "franklin",
    profession: mongoose.mongo.ObjectId("5c5cd03964456033ac212432"),
    state: mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc28"),
    city: "Monterrey",
    area: "Cumbres",
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectID("5c50dddb2e135134edee9a48"),
    reviews: [
      mongoose.mongo.ObjectID("5c52378e26d8344aea5a6e2f")
    ],

    hires: [
      mongoose.mongo.ObjectID("5c52380d26d8344aea5a6e33")
    ],
    messages: [
      mongoose.mongo.ObjectID("5c5237e126d8344aea5a6e30"),
      mongoose.mongo.ObjectID("5c5237f726d8344aea5a6e31")
    ],
    costRates: [
      mongoose.mongo.ObjectID("5c52377126d8344aea5a6e2e")
    ],
    qualityRates: [
      mongoose.mongo.ObjectID("5c52380426d8344aea5a6e32")
    ],
    firstName: "Froylan",
    lastName: "Vargas",
    userName: "fvargas",
    profession: mongoose.mongo.ObjectId("5c5cd03964456033ac212434"),
    state: mongoose.mongo.ObjectID("5c5b2f78cc485304b96cfc1e"),
    city: "Ciudad de Mexico",
    area: "Tlalcoligia",
    __v: 0
  }
];

db.Kontratado
  .remove({})
  .then(() => db.Kontratado.collection.insertMany(kontratadoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



const costRateSeed = [

  {
    _id: mongoose.mongo.ObjectId("5c50df87ff467935f0f4e56e"),
    costRating: 3,
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c52377126d8344aea5a6e2e"),
    costRating: 4,
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  }
];

db.CostRate
  .remove({})
  .then(() => db.CostRate.collection.insertMany(costRateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const reviewSeed = [
  {
    _id: mongoose.mongo.ObjectId("5c50e17ce850f73788c93b26"),
    review: "Me gusto mucho su trabajo, muy guapeton",
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    review_date: new Date,
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c52378e26d8344aea5a6e2f"),
    review: "Trabaja como los dioses, se los recomiendo mucho.",
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    review_date: new Date,
    __v: 0
  }
];
db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    //process.exit(1);
  });

const messageSeed = [
  {
    _id: mongoose.mongo.ObjectId("5c50e2cdf523b138be3dee68"),
    message: "Oye, me podrás ayudar hoy por la noche?",
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    isUserMessage: true,
    message_date: new Date,
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c50e67618f97b3b625de080"),
    message: "Claro que por supuesto que no",
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    isUserMessage: false,
    message_date: new Date,
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c5237e126d8344aea5a6e30"),
    message: "Hola Froy estas ocupado esta mañana",
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    isUserMessage: true,
    message_date: new Date,
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c5237f726d8344aea5a6e31"),
    message: "No, en que le puedo ayudar?",
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    isUserMessage: false,
    message_date: new Date,
    __v: 0
  }
]

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

const QualityRatesSeed = [
  {
    _id: mongoose.mongo.ObjectId("5c50e43eeabd4b39537efaf2"),
    quality: 4,
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c52380426d8344aea5a6e32"),
    quality: 5,
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  }
]

db.QualityRate
  .remove({})
  .then(() => db.QualityRate.collection.insertMany(QualityRatesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });

const HireSeed = [
  {
    _id: mongoose.mongo.ObjectId("5c50e49286ba6539a6ba05ac"),
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    hire_date: new Date,
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c52380d26d8344aea5a6e33"),
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    hire_date: new Date,
    __v: 0
  }
]

db.Hire
  .remove({})
  .then(() => db.Hire.collection.insertMany(HireSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

const FavouriteSeed = [
  {
    _id: mongoose.mongo.ObjectId("5c50e5b37764a03ad83aaf0e"),
    kontratado: mongoose.mongo.ObjectId("5c50dd7e2e135134edee9a47"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  },
  {
    _id: mongoose.mongo.ObjectId("5c52381c26d8344aea5a6e34"),
    kontratado: mongoose.mongo.ObjectId("5c50dddb2e135134edee9a48"),
    user: mongoose.mongo.ObjectId("5c50a78d8d01d0300099ad66"),
    __v: 0
  }
]

db.Favourite
  .remove({})
  .then(() => db.Favourite.collection.insertMany(FavouriteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

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
  })
  .catch(err => {
    console.error(err);
  });
