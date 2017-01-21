var express = require("express");
var server = express();
var fs = require('fs');


server.use(express.static("public"));
server.set('views', 'view');
server.set('view engine', 'jade');

server.get("/",function (req,res) {
    fs.readFile('data/posts.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var obj = JSON.parse(data);
        res.render('index', {posts : obj});

    });
});



server.listen(3000);







