var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'sql10.freemysqlhosting.net',
	user: 'sql10163189',
	password: 'y8B86vnqkm',
	database:'sql10163189'
});

var userModel = {};

userModel.getAllUsers = function(callback)
{
	if(connection)
	{
		connection.query('select * from user', function(err, rows)
		{
			if(err)
			{
				throw err;
			}
			else
			{
				callback(null, rows);
			}

		});
	}
}
module.exports = userModel;