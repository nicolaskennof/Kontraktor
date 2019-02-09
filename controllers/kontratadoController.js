var db = require("../models");
const bcrypt = require('bcrypt-nodejs');

module.exports = {

    register: (req, res) => {
        const {county, contactPhone, description, email, firstName, lastName, password, profession, state} = req.body;
        if (county && contactPhone  && description && email && firstName && lastName && password && profession && state) {
            const kontratado = {
                county, contactPhone,description,email,firstName, lastName, profession, state
            }
            db.Kontratado.create(kontratado).then(userResult => {
                const hash = bcrypt.hashSync(password);
                db.KontratadoLogin.create({ kontratado: userResult._id, hash })
                    .then(loginResult => {
                        db.Kontratado.findOneAndUpdate({ _id: userResult._id },
                            { kontratadoLogin : loginResult._id }, { new: true })
                            .then(() => {
                                res.status(200).json(userResult._id);
                            })
                            .catch(err => {
                                res.status(500).json(err.message);
                            })
                    })
                    .catch(err => res.status(500).json(err.message))
            }).catch(err => {
                if (err.code === 11000) return res.status(400).json("The email account already exists")
                res.status(500).json(err.message)
            })
            } else {
            res.status(400).json("Fill all required fields");
        }
    },

    getbyId: (req, res) => {
        if (req.params.id) {
            db.Kontratado
                .findOne({ _id: req.params.id })
                .populate({ path: "costRates", populate: { path: "user" } })
                .populate({ path: "reviews", populate: { path: "user" } })
                .populate({ path: "messages", populate: { path: "user" } })
                .populate({ path: "qualityRates", populate: { path: "user" } })
                .populate({ path: "hires", populate: { path: "user" } })
                .populate('state')
                .populate('profession')
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
        }
    },

    getKontratadoByFilter: (req, res) => {
        const { searchProfession, searchState } = req.body;
        const query = {
            $and: [
                { profession: searchProfession },
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
            .populate('profession')
            .then(result => res.status(200).json(result))
            .catch(err => res.status(422).json(err.message))
    },

    updateKontratado: (req,res) => {
        const {county, contactPhone, description, email, firstName, lastName, profession, state} = req.body;
        const kontratado = {
            county, contactPhone,description,email,firstName, lastName, profession, state
        }
        if (county && contactPhone  && description && email && firstName && lastName && profession && state) {
            db.Kontratado.findOneAndUpdate({email},kontratado,{new: true})
                .then((result)=>{
                   res.status(200).json(result);
                })
                .catch(err=>res.status(400).json(err.message));
        }
    }
}