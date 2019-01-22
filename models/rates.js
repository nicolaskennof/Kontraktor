var mongoose = require("mongoose");



var Schema = mongoose.Schema;


var RatesSchema = new Schema({
    // `title` is required and of type String
    costRate: {
        type: Number,
        required: false,      
    },

    qualityRate: {
        type: Number,
        required: true,
    },

    qualifiedBy:{
        type: Schema.Types.ObjectId, ref: "User",
        required:true,
    },

    kontratado:{
        type: Schema.Types.ObjectId, ref: "Kontratado",
        required: true,
    }
    
    });



    var Rates = mongoose.model("Rates", RatesSchema);

    // Export the Rates model
    module.exports = Rates;
    


