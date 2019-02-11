const db = require("../models");
const bcrypt = require('bcrypt-nodejs');

module.exports = {

    login: (req, res) => {
        const {email, password} = req.body;
        if (!email || !password)  res.status(400).json("Datos requeridos");
        db.Kontratado.findOne({email})
        .populate("kontratadoLogin")
        .then(result=>{
            if (!result)  res.status(400).json("Cuenta no registrada");
            const isValid = bcrypt.compareSync(password, result.kontratadoLogin.hash);
            isValid ? res.status(200).json({
                kontratadoId : result._id,
            }) : res.status(400).json("Revisa tu usuario y contraseña");
        })
        .catch(err=>res.status(400).json(err.message));
    }
}