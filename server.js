var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log('Date: '+date+' Request: '+req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log('Express Server started');
});