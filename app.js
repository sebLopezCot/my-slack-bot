// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var logger = require('morgan');


// Server Handling ---------------------------------------------------------------

// Web server listener setup
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), '0.0.0.0', function(){
	console.log('Server listening at port %d', app.get('port').toString());
});

var routes = require('./routes');

// MVC View setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

// Routing
// app.use(express.static(__dirname + '/public'));

app.use('/', routes);

// API CALLS --------------------------------


// Error Handling -------------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// dev error handler (will print stacktrace)
if(app.get('env') === 'development'){
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler (won't print stacktrace)
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
