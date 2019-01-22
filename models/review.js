var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({

    review_date : {
        type : Date,
        default : Date.now
    },
    
    review: {
        type: String,
        required : true
    },

    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;