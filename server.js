var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', function(resquest, response){
	response.send("hola mundo " + app.get('port') );
});

app.listen(app.get('port'), function(){
	console.log('funciono', app.get('port'));
});