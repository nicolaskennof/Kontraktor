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

    userName: {
        type: String,
        required: true,
    },

    profession: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    area: {
        type: String,
        required: true,
    },

    contactPhone: {
        type: String,
        required: false,
    },

    kontratadoLogin: { type: Schema.Types.ObjectId, ref: 'KontratadoLogin' },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    visits: [
        {
            type: Schema.Types.ObjectId,
            ref: "Visit"
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