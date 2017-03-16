var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var module = require('./crud');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

app.get('/', function(request, response){
	//response.json({message:'Prados House Web Service'});
	module.getAllUsers(function(err, data){
		response.json(data);
	});
});

app.listen(app.get('port'), function(){
	console.log('funciono', app.get('port'));
});