var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StateSchema = new Schema({
    
    state: {
        type: String,
        required : true
    },

    counties: [
        {
            type: Schema.Types.ObjectId,
            ref: "County"
        }
    ],


});

var State = mongoose.model("State", StateSchema);

module.exports = State;