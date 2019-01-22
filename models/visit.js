var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VisitSchema = new Schema({
    
    visit_date : {
        type : Date,
        default : Date.now
    },
    
    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
        required : true
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
        required : true
    }
});

var Visit = mongoose.model("Visit", VisitSchema);

module.exports = Visit;