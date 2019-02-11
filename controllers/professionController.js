var db = require("../models");

module.exports = {

    getProfession: (req, res) => {
        db.Profession
            .find({})
            .then(dbModel=>{
                res.status(200).json(dbModel);
            })
            .catch(err => res.status(422).json(err.message));
    },

    getprofession1:(req,res)=>{
        if(req.params.id){
            console.log(req.params.id)
            console.log("we are hitting the new profession route on back end")
            db.Profession
            .findById({_id: req.params.id})
            .then(dbModel=>{
                console.log(dbModel);
                res.status(200).json(dbModel);
                
            }).catch(err=> res.status(422).json(err.message))
        }
    }
}