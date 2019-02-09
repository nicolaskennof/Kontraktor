var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");
var models = require("../models");

function createImage(req,res,db){
    var filesrc = path.join(__dirname, "../", req.file.path);
        var bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'fs' });
        fs.createReadStream(filesrc)
            .pipe(bucket.openUploadStream(req.file.originalname))
            .on('error', () => {
                console.log("Some error occured:" + error);
                res.json(error);
            })
            .on('finish', (result) => {
                fs.unlink(path.join(__dirname, "../", req.file.path), () => { });
                var chunksCollection = db.collection('fs.chunks');
                chunksCollection.find({ files_id: new mongoose.mongo.ObjectID(result._id) }).toArray().then(chunks => {
                    models.Kontratado.findOneAndUpdate({ _id: req.params.id }, { fileImage: result._id, image: chunks[0]._id })
                        .then(() => {
                            res.status(200).json(chunks[0]._id)
                        })
                        .catch(err => res.status(400).json(err.message))
                })
            });
}


module.exports = {
    create: (req, res) => {
        let db = mongoose.connection.db;
        models.Kontratado.find({ _id: req.params.id })
            .then(result => {
                if (result[0].fileImage) {
                    var bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'fs' });
                    bucket.delete(mongoose.mongo.ObjectId(result[0].fileImage));
                    createImage(req,res,db);
                } else {
                    createImage(req,res, db);
                }
            })
    },

    getImage: (req, res) => {
        var db = mongoose.connection.db;

        var chunksCollection = db.collection('fs.chunks');
        var filesCollection = db.collection('fs.files');

        chunksCollection.find({ _id: new mongoose.mongo.ObjectID(req.params.id) }).toArray().then(chunks => {
            filesCollection.find({ _id: new mongoose.mongo.ObjectID(chunks[0].files_id) }).toArray().then(files => {
                res.set('Content-Type', "image/*");
                res.set('Content-Disposition', 'attachment; filename="' + files[0].filename + '"');
                res.send(chunks[0].data.buffer);
            })
        })
    }
}
