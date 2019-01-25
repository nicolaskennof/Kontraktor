var db = require("../models");


module.exports = {
    create: (req, res) => {
            console.log("we getting here");   
        if(req.body.firstName && req.body.lastName && req.body.userName && req.body.profession && req.body.state && req.body.city && req.body.area){
                db.Kontratado
                .create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
            }
        },

    getbyId: (req,res)=>{
            console.log("we are on getbyId");
            if(req.params.id){
                db.Kontratado
                .findOne({_id: req.params.id})
                .populate("costRates")
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err.message));
            }
            },    
        
        }

    
    


/*firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },

    profession: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    area: {
        type: String,
        required: true,
    }
*/