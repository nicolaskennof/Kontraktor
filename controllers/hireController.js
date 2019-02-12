var db = require("../models");


module.exports = {
    insertHire: (req, res) => {
        if (req.body.kontratado && req.body.user) {
            db.Hire
                .create(req.body)
                .then(dbModel => {
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { hires: dbModel._id } }, { new: true })
                        .then(updated => {
                            db.User.findOneAndUpdate({ _id: dbModel.user }, { $push: { hires: dbModel._id } }, { new: true })
                                .then(userUpdated => {
                                    res.status(200).json(dbModel);
                                })
                        })
                })
                .catch(err => res.status(422).json(err.message));
        }
    },

    deleteHire: (req, res) => {
        if (req.params.id) {
            db.Hire
                .findOneAndDelete({ _id: req.params.id })
                .then(dbModel => {
                    return res.status(200).json(dbModel);
                })
        }
    },
}


