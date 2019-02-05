var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    fullName: {
        type: String, required:true, trim:true
    },
    
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    
    facebookProvider: {
        type: {
            id: String,
            token: String
        },
    },

    favourites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Favourite"
        }
    ],

    messages : [
        {
            type: Schema.Types.ObjectId,
            ref: "Message"
        }
    ]

});

UserSchema.set('toJSON', { getters: true, virtuals: true });

UserSchema.statics.upsertFbUser = function (accessToken, refreshToken, profile, cb) {
    var that = this;
    return this.findOne({
        'facebookProvider.id': profile.id
    }, function (err, user) {
        if (!user) {
            var newUser = new that({
                fullName: profile.displayName,
                email: profile.emails[0].value,
                facebookProvider: {
                    id: profile.id,
                    token: accessToken
                }
            });

            newUser.save(function (error, savedUser) {
                if (error) {
                    console.log(error);
                }
                return cb(error, savedUser);
            });
        } else {
            return cb(err, user);
        }
    });
};

var User = mongoose.model("User", UserSchema);

module.exports = User;



