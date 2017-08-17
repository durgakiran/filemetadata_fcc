var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();
app.listen(3000);

app.use('',express.static('views'));
app.get('',function(req,res){
    res.sendFile('./views/index.html');
    res.end();
});
app.post('/upload',upload.single('filetoupload'),function(req,res){
    res.json({
    'name' : req.file.originalname,
    'type' : req.file.mimetype,
    'size' : req.file.size
   });
   res.end();
})