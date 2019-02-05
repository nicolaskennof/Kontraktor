const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kontratado"
);
const kontratadoSeed = [
  {
    _id: "5c50dd7e2e135134edee9a47",
    reviews: [
      "5c50e17ce850f73788c93b26"
    ],
    hires: [
      "5c50e49286ba6539a6ba05ac"
    ],
    messages: [
      "5c50e2cdf523b138be3dee68",
      "5c50e67618f97b3b625de080"
    ],
    costRates: [
      "5c50df87ff467935f0f4e56e"
    ],
    qualityRates: [
      "5c50e43eeabd4b39537efaf2"
    ],
    firstName: "Francisco",
    lastName: "Gonzalez",
    userName: "franklin",
    profession: "Albañil",
    state: "Nuevo Leon",
    city: "Monterrey",
    area: "Cumbres",
    __v: 0
  },
  {
    _id: "5c50dddb2e135134edee9a48",
    reviews: [
      "5c52378e26d8344aea5a6e2f"
    ],
    hires: [
      "5c52380d26d8344aea5a6e33"
    ],
    messages: [
      "5c5237e126d8344aea5a6e30",
      "5c5237f726d8344aea5a6e31"
    ],
    costRates: [
      "5c52377126d8344aea5a6e2e"
    ],
    qualityRates: [
      "5c52380426d8344aea5a6e32"
    ],
    firstName: "Froylan",
    lastName: "Vargas",
    userName: "fvargas",
    profession: "Plomero Feliz",
    state: "Ciudad de Mexico",
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
    _id: "5c50df87ff467935f0f4e56e",
    costRating: 3,
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    __v: 0
  },
  {
    _id: "5c52377126d8344aea5a6e2e",
    costRating: 4,
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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
    _id: "5c50e17ce850f73788c93b26",
    review: "Me gusto mucho su trabajo, muy guapeton",
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    review_date: new Date,
    __v: 0
  },
  {
    _id: "5c52378e26d8344aea5a6e2f",
    review: "Trabaja como los dioses, se los recomiendo mucho.",
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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
    _id: "5c50e2cdf523b138be3dee68",
    message: "Oye, me podrás ayudar hoy por la noche?",
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    isUserMessage: true,
    message_date: new Date,
    __v: 0
  },
  {
    _id: "5c50e67618f97b3b625de080",
    message: "Claro que por supuesto que no",
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    isUserMessage: false,
    message_date: new Date,
    __v: 0
  },
  {
    _id: "5c5237e126d8344aea5a6e30",
    message: "Hola Froy estas ocupado esta mañana",
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
    isUserMessage: true,
    message_date: new Date,
    __v: 0
  },
  {
    _id: "5c5237f726d8344aea5a6e31",
    message: "No, en que le puedo ayudar?",
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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
    _id: "5c50e43eeabd4b39537efaf2",
    quality: 4,
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    __v: 0
  },
  {
    _id: "5c52380426d8344aea5a6e32",
    quality: 5,
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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
    _id: "5c50e49286ba6539a6ba05ac",
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    hire_date: new Date,
    __v: 0
  },
  {
    _id: "5c52380d26d8344aea5a6e33",
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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
    _id: "5c50e5b37764a03ad83aaf0e",
    kontratado: "5c50dd7e2e135134edee9a47",
    user: "5c53811e7fb5d50d2c73c64b",
    __v: 0
  },
  {
    _id: "5c52381c26d8344aea5a6e34",
    kontratado: "5c50dddb2e135134edee9a48",
    user: "5c53811e7fb5d50d2c73c64b",
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

