var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

app.get('/', function(resquest, response){
	response.json({message:'Prados House Web Service'});
});

app.listen(app.get('port'), function(){
	console.log('funciono', app.get('port'));
});