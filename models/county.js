var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CountySchema = new Schema({
    
    county: {
        type: String,
        required : true
    },

    state : {
        type: Schema.Types.ObjectId, ref: "State",
    }

});

var County = mongoose.model("County", CountySchema);

module.exports = County;