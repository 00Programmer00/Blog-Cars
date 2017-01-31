var express = require("express");
var server = express();
var fs = require('fs');
var user = require('./models/user.js');


server.use(express.static("public"));
server.set('views', 'view');
server.set('view engine', 'jade');

server.get("/",function (req,res) {
    res.render('index');
});

server.get("/posts", function (req,res) {
    fs.readFile('data/posts.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var obj = JSON.parse(data);
        res.send(obj);
    });
});



server.listen(3000);







