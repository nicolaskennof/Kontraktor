var mongoose = require("mongoose");



var Schema = mongoose.Schema;


var mensajesSchema = new Schema({
    // `title` is required and of type String
   
        mensaje:{
            type: String,

        },

        reciever: {
            type: Schema.Types.ObjectId, ref: "Kontratado",
        },

        sender:{
            type: Schema.Types.ObjectId, ref: "User",
        }
    });

    var Mensajes = mongoose.model("Mensajes", mensajesSchema);

    // Export the Mensajes model
    module.exports = Mensajes;
    


