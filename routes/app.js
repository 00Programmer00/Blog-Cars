var posts = require("../data/posts");
var express = require("express");
var server = express();
var fs = require('fs');
var path = require("path");
var post = require("../js/post");


server.use(express.static("../public"));


server.get("/posts",function (req,res) {
    fs.readFile('../data/posts.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var obj = JSON.parse(data);
        res.send(obj);
    });
});

server.listen(3000);







