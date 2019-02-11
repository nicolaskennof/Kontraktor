var db = require("../models");


module.exports = {
    insertQualityRate: (req, res) => {
        const { quality, kontratado, user } = req.body;
        if (quality && kontratado && user) {

            const query = {
                $and: [
                    { kontratado },
                    { user }
                ]
            }

            db.QualityRate.find(query)
                .then(qualityRates => {
                    if (qualityRates.length) {
                        db.QualityRate.findByIdAndDelete({ _id: qualityRates[0]._id })
                            .then(deleted => {
                                db.QualityRate
                                    .create(req.body)
                                    .then(dbModel => {
                                        db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { qualityRates: dbModel._id } }, { new: true })
                                            .then(updated => {
                                                res.status(200).json(dbModel);
                                            })
                                    })
                                    .catch(err => res.status(422).json(err.message));
                            })
                    } else {
                        db.QualityRate
                            .create(req.body)
                            .then(dbModel => {
                                db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { qualityRates: dbModel._id } }, { new: true })
                                    .then(updated => {
                                        res.status(200).json(dbModel);
                                    })
                            })
                            .catch(err => res.status(422).json(err.message));
                    }
                })
        }
    },

    editQualityRate: (req, res) => {
        if (req.body.quality && req.params.id) {
            db.QualityRate
                .findOneAndUpdate({ _id: req.params.id }, { quality: req.body.quality })
                .then(dbModel => {
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { qualityRates: dbModel._id })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })
                .catch(err => res.status(422).json(err.message));
        }

    },



    deleteQualityRate: (req, res) => {
        if (req.params.id) {
            db.QualityRate
                .findOneAndDelete({ _id: req.params.id })
                .then(dbModel => {
                    db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { qualityRates: req.params.id })
                        .then(updated => {
                            res.status(200).json(dbModel);
                        })
                })
        }
    }

}
