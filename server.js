var express = require("express");
var app = express()
var highlight = require("highlight.js")

app.get('/', function(req, res){
	res.send("Hello World");
});

var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Code Highlighting service is listening at http://%s:%s", host, port);
	console.log("Does this work?");
	console.log(highlight);
});
