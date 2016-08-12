// use module exports to expose middleware 

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
}

module.exports = middleware;