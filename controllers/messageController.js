var db = require("../models");


module.exports = {
    insertMessage: (req, res) => {
        console.log("we getting here");

        if (req.body.message && req.body.kontratado && req.body.user) {
            db.Message
                .create(req.body)
                .then(dbModel => {
                        db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { messages: dbModel._id } }, { new: true })
                            .then(updated => {
                                res.status(200).json(dbModel);
                                   })
                    })
                .catch(err => res.status(422).json(err.message));
        }
    }
}


