var db = require("../models");

module.exports = {

    getStates: (req, res) => {
        db.State
            .find({})
            .populate("counties")
            .then(dbModel=>{
                res.status(200).json(dbModel);
            })
            .catch(err => res.status(422).json(err.message));
    }
}