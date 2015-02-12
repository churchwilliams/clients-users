var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var User = require('./lib/models/usersModel.js');

var app = Express();
var port = 8080;
var mongoUri = "mongodb://localhost:27017/clients-user";

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function(){
	console.log("connected to db at " + mongoUri);
});

app.use(BodyParser.json());

app.post('/api/user', function(req, res){
	User.create(req.body).then(function(response){
		res.status(200).json(response);
	},
	function(err){
		res.status(500).json(err);
	});
});

app.get('/api/users', function(req, res){
	User.find(function(err, docs){
		if(!err){
			if(docs.length === 0){
				res.status(404).send("No documents found")
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status
		}
	})
})

app.listen(port, function(){
	console.log("taking kurr of biznass on " + port);
});