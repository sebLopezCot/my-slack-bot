var express = require('express');
var router = express.Router();

// GET home page
router.post('/', function(req, res){
	// res.render('index', {gimme: req.body});
	console.log(req.body);
	res.send("Done");
});

module.exports = router;
