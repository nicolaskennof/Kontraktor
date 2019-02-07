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
                .populate({ path: "costRates", populate: { path: "user" } })
                .populate({ path: "reviews", populate: { path: "user" } })
                .populate({ path: "messages", populate: { path: "user" } })
                .populate({ path: "qualityRates", populate: { path: "user" } })
                .populate({ path: "hires", populate: { path: "user" } })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
        }
    },

    getKontratadoByFilter: (req, res) => {
        const { searchProfession, searchState } = req.body;
        const query = {
            $and: [
                { profession: new RegExp(searchProfession, "i") },
                { state: searchState }
            ]
        }
        db.Kontratado.find(query)
            .populate({ path: "costRates", populate: { path: "user" } })
            .populate({ path: "reviews", populate: { path: "user" } })
            .populate({ path: "messages", populate: { path: "user" } })
            .populate({ path: "qualityRates", populate: { path: "user" } })
            .populate({ path: "hires", populate: { path: "user" } })
            .populate('state')
            .then(result => res.status(200).json(result))
            .catch(err => res.status(422).json(err.message))
    }
}