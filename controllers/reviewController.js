var db = require("../models");

module.exports = {

    insertReview: (req, res) => {
        console.log("we getting to insert reviews");

        if (req.body.review && req.body.kontratado && req.body.user) {
            db.Review
                .create(req.body)
                .then(
                    dbModel => {
                        console.log(dbModel);
                        db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { reviews: dbModel._id } }, { new: true })

                            .then(updated => {
                                res.status(200).json(dbModel);
                            })
                    }
                )
                .catch(err => res.status(422).json(err.message));
        }
    },

    editReview: (req, res) => {
        if (req.body.review && req.params.id) {
            db.Review
                .findOneAndUpdate({ _id: req.params.id }, { review: req.body.review })
                .then(dbModel => {
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { reviews: dbModel._id })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })

                .catch(err => res.status(422).json(err.message));
        }
    },

    deleteReview: (req, res) => {
        if (req.params.id) {
            db.Review
                .findOneAndDelete({ _id: req.params.id })
                .then(dbModel => {
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { reviews: req.params.id })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })
        }
    }
}

