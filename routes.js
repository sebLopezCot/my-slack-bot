var express = require('express');
var router = express.Router();

// GET home page
router.post('/', function(req, res){
	// res.render('index', {gimme: req.body});
	console.log(req.body);
	res.send("Soon you'll be able to launch cyclops from here!");
});

module.exports = router;
