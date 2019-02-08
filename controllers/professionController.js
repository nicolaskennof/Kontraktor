var db = require("../models");

module.exports = {

    getProfession: (req, res) => {
        db.Profession
            .find({})
            .then(dbModel=>{
                res.status(200).json(dbModel);
            })
            .catch(err => res.status(422).json(err.message));
    }
}