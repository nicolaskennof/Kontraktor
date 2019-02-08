var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfessionSchema = new Schema({
    profession: {
        type: String,
        required : true, 
        unique : true
    },
});

var Profession = mongoose.model("Profession", ProfessionSchema);

module.exports = Profession;