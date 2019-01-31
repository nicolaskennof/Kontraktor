var db = require("../models");

module.exports = {
    insertMessage: (req, res) => {
        if (req.body.message && req.body.kontratado && req.body.user, req.body.isUserMessage) {
            db.Message
                .create(req.body)
                .then(dbModel => {
                    console.log("Inserted Message");
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { messages: dbModel._id } }, { new: true })
                        .then(updatedKontratado => {
                            db.User.findOneAndUpdate({ _id: dbModel.user }, { $push: { messages: dbModel._id } }, { new: true })
                                .then(updaatedUser => {
                                    res.status(200).json(dbModel);
                                })
                        })
                })
                .catch(err => res.status(422).json(err.message));
        }
    }
}


