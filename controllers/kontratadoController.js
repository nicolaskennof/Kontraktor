var db = require("../models");


module.exports = {
    create: (req, res) => {
        if (req.body.firstName && req.body.lastName && req.body.userName && req.body.profession && req.body.state && req.body.city && req.body.area) {
            db.Kontratado
                .create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
        }
    },

    getbyId: (req, res) => {
        console.log("we are on getbyId");
        if (req.params.id) {
            db.Kontratado
                .findOne({ _id: req.params.id })
                .populate("costRates")
                .populate("reviews")
                .populate("messages")
                .populate("qualityRates")
                .populate("hires")
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
        }
    }
}