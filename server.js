var express = require("express");
var bodyParser = require("body-parser")

var app = express()
app.use(bodyParser.json());

var highlight = require("highlight.js")

app.get('/', function(req, res){
	res.send("Hello World");
});

app.post("/hakunamatata", function(req, res){
	console.log("In hakunamatata");
	console.log(req.body);
	res.send(req.body);
})

var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Code Highlighting service is listening at http://%s:%s", host, port);
});
