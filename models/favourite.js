var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FavouriteSchema = new Schema({
    
    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = Favourite;
    