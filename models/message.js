var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({

    message_date : {
        type : Date,
        default : Date.now
    },
    
    message: {
        type: String,
        required : true
    },

    isUserMessage: {
        type: Boolean,
        required: true
    },

    kontratado : {
        type: Schema.Types.ObjectId, ref: "Kontratado",
    },

    user : {
        type: Schema.Types.ObjectId, ref: "User",
    }
});

var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;