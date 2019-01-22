var mongoose = require("mongoose");



var Schema = mongoose.Schema;


var KontratadoSchema = new Schema({
    // `title` is required and of type String
    firstName: {
        type: String,
        required: true,        
    },

    lastName: {
        type: String,
        required: true,
    },

    userName:{
        type: String,
        required: true,
    },

    password: {
        type:String,
        required: true,
    },

    profession:{
        type: Schema.Types.ObjectId, ref: "Profession",
        required: true,
    },

    timesHired:{
        type: Number,
        required: false,
        default: 0,
    },

    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    area:{
        type: String,
        required: true,
    },
    contactPhone:{
        type: String,
        required: false,
    },
    pictures:{
        type: String,
        required: false,
    }});



    var Kontratado = mongoose.model("Kontratado", KontratadoSchema);

    // Export the Kontratado model
    module.exports = Kontratado;
    


// agregar varias areas