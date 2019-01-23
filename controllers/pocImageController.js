var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

module.exports = {
    create: (req, res) => {
        var filesrc = path.join(__dirname, "../", req.file.path);

        //Modify this to use multer. 
        var bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'fs' });
        fs.createReadStream(filesrc)
            .pipe(bucket.openUploadStream(req.file.originalname))
            .on('error', () => {
                console.log("Some error occured:" + error);
                res.json(error);
            })
            .on('finish', (result) => {
                console.log(result);
                res.json('Done Uploading');
            });
    },

    getImage: (req, res) => {
        
        var db = mongoose.connection.db;
        
        var chunksCollection = db.collection('fs.chunks');
        var filesCollection = db.collection('fs.files');
        chunksCollection.find({ _id: new mongoose.mongo.ObjectID(req.params.id) }).toArray().then(chunks => {
            filesCollection.find({_id : new mongoose.mongo.ObjectID(chunks[0].files_id)}).toArray().then(files => {
                res.set('Content-Type', "image/*");
                res.set('Content-Disposition', 'attachment; filename="' + files[0].filename + '"');
                res.send(chunks[0].data.buffer);
            })
        })



    }
}
