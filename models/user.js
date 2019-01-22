var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        trim: true,
        unique: true
    },

    favourites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Favourite"
        }
    ],

    visits: [
        {
            type: Schema.Types.ObjectId,
            ref: "Visit"
        }
    ]

});

var User = mongoose.model("User", UserSchema);

module.exports = User;



