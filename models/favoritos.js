var mongoose = require("mongoose");



var Favoritos = mongoose.Favoritos;


var FavoritesSchema = new Schema({
    // `title` is required and of type String
    user: {
        type: String,
        required: true,      
    },

    kontratados:{
        type: Schema.Types.ObjectId,
        ref: "Kontratado",
    }    
    });

    var Favoritos = mongoose.model("Favoritos", FavoritesSchema);

    // Export the Favoritos model
    module.exports = Favoritos;
    