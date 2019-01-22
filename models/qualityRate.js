var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QualityRateSchema = new Schema({

    quality: {
        type: Number,
    },

    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var QualityRate = mongoose.model("QualityRate", QualityRateSchema);

module.exports = QualityRate;