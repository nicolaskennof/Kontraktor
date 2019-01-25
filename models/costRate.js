var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CostRateSchema = new Schema({

    costRating: {
        type: Number,
        required : true
    },

    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var CostRate = mongoose.model("CostRate", CostRateSchema);

module.exports = CostRate;