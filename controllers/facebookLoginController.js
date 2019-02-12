var db = require("../models");

module.exports = {
    login: (req, res, next) => {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    },

    getUserById: (req,res) => {
        let id = req.params.id;
        if (id){
            db.User.findById(id)
                .populate({ path:"messages", populate : {path : "kontratado" , populate:[{path : "profession"},{path : "qualityRates"},{path : "costRates"},{path : "qualityRates"},{path : "costRates"}]}})
                .populate({ path:"favourites", populate : {path : "kontratado", populate:[{path : "profession"},{path : "qualityRates"},{path : "costRates"},{path : "qualityRates"},{path : "hires"}] }})
                .populate("hires")
                .then(user => {
                    res.status(200).json(user);
                })
        }
    }
}