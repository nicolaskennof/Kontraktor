const db = require("../models");
const bcrypt = require('bcrypt-nodejs');

module.exports = {

    login: (req, res) => {
        const {email, password} = req.body;
        if (!email || !password)  res.status(400).json("Data required");
        db.Kontratado.findOne({email})
        .populate("kontratadoLogin")
        .then(result=>{
            if (!result)  res.status(400).json("Account not registered");
            const isValid = bcrypt.compareSync(password, result.kontratadoLogin.hash);
            isValid ? res.status(200).json({
                kontratadoId : result._id,
            }) : res.json("Check your login info");
        })
        .catch(err=>res.status(400).json(err.message));
    }
}