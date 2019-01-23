var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HireSchema = new Schema({
    
    hire_date : {
        type : Date,
        default : Date.now
    },
    
    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var Hire = mongoose.model("Hire", HireSchema);

module.exports = Hire;