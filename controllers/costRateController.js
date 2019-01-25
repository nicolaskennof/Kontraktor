var db = require("../models");


module.exports = {
    insertcostRate: (req, res) => {
        console.log("we getting here");

        if (req.body.costRating && req.body.kontratado && req.body.user) {
            db.CostRate
                .create(req.body)
                .then(

                    dbModel => {
                        db.Kontratado.findOneAndUpdate({ _id: dbModel.kontratado }, { $push: { costRates: dbModel._id } }, { new: true })
                            .then(updated => {
                                res.status(200).json(dbModel);
                                   })
                    }
                                 
                     )
                .catch(err => res.status(422).json(err.message));



        }






    }
}


