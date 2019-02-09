var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var KontratadoLoginSchema = new Schema({

    kontratado : { type: Schema.Types.ObjectId, ref: 'Kontratado' }, 
    
    hash : {
        type : String,
        required : true
    }

})

var Login = mongoose.model("KontratadoLogin", KontratadoLoginSchema);

module.exports = Login;