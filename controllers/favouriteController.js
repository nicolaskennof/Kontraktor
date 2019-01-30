var db = require("../models");

module.exports = {
    insertFavourite: (req, res) => {
        if (req.body.kontratado && req.body.user) {
            db.Favourite
                .create(req.body)
                .then(dbModel => {
                    db.User.findOneAndUpdate({ _id: dbModel.user }, { $push: { favourites: dbModel._id } }, { new: true })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })
                .catch(err => res.status(422).json(err.message));
        }
    }
}