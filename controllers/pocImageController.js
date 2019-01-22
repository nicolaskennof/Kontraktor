var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

module.exports = {
    create: (req, res) => {
        var filesrc = path.join(__dirname, "../client/public/assets/img/tempProfileImages/blondi.jpg");
        //Modify this to use multer. 
        var bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'profileImages' });
        fs.createReadStream(filesrc)
            .pipe(bucket.openUploadStream('myFile.jpg'))
            .on('error', () => {
                console.log("Some error occured:" + error);
                res.send(error);
            })
            .on('finish', (result) => {
                console.log(result);
                res.send('Done Uploading');
            });
    }
}


/*

    <form action="/upload/photo" enctype="multipart/form-data" method="POST">
  <input type="file" name="myImage" accept="image/*" />
  <input type="submit" value="Upload Photo"/>
</form>



*/