var db = require("../models");

module.exports = {
    insertFavourite: (req, res) => {
        if (req.body.kontratado && req.body.user) {
            db.Favourite
                .create(req.body)
                .then(dbModel => {
                    db.User.findOneAndUpdate({ _id: dbModel.user }, { $push: { favourites: dbModel._id } }, { new: true })
                        .then(userUpdated => {
                            db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { favourites: dbModel._id } }, { new: true })
                                .then(kontratadoUpdated => {
                                    res.status(200).json(kontratadoUpdated);
                                })
                        })
                })
                .catch(err => res.status(422).json(err.message));
        }
    },
    deleteFavourite: (req, res) => {
        if (req.params.id) {
            db.Favourite
                .findOneAndDelete({ _id: req.params.id })
                .then(dbModel => {

                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { favourites: req.params.id })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })
        }
    },
    getFavourite: (req, res) => {
        if (req.params.id) {
            db.Favourite
                .findById({ _id: req.params.id })
                .then(dbModel => {
                    db.Kontratado.findByIdAndUpdate({ _id: dbModel.kontratado }, { favourites: req.params.id })
                        .then(updated => {
                            res.status(200).json(updated);
                        })
                })
        }
    }
}



