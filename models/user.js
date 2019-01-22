var mongoose = require("mongoose");



var Schema = mongoose.Schema;


var UserSchema = new Schema({
    // `title` is required and of type String
    username: {
        type: String,
        required: true,    
        unique: true,    
    },

    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        trim: true,
        unique: true,
    },
    
    password:{
        type: String,
        required: true,
    }


    });



    var User = mongoose.model("User", UserSchema);

    // Export the User model
    module.exports = User;
    


