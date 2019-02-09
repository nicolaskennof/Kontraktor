var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var KontratadoSchema = new Schema({
    
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email : {
        type : String,
        required : true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        trim: true,
        unique : true
    },

    image : {
        type : Schema.Types.ObjectId
    },

    fileImage : {
        type : Schema.Types.ObjectId
    },

    state: { type: Schema.Types.ObjectId, ref: 'State' },

    profession: { type: Schema.Types.ObjectId, ref: 'Profession' },

    county: { type: Schema.Types.ObjectId, ref: 'County' },

    description: {
        type: String,
        required: true
    },

    contactPhone: {
        type: String,
        required: false,
    },

    kontratadoLogin: { type: Schema.Types.ObjectId, ref: 'KontratadoLogin', select:false },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    hires: [
        {
            type: Schema.Types.ObjectId,
            ref: "Hire"
        }
    ],

    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message"
        }
    ],

    costRates: [
        {
            type: Schema.Types.ObjectId,
            ref: "CostRate"
        }
    ],

    qualityRates: [
        {
            type: Schema.Types.ObjectId,
            ref: "QualityRate"
        }
    ]

});

var Kontratado = mongoose.model("Kontratado", KontratadoSchema);

module.exports = Kontratado;