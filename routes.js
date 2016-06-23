var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res){
	// res.render('index', {gimme: req.body});
	// console.log(req.query);
	res.send("Soon you'll be able to launch cyclops from here!" + "\n" + JSON.stringify(req.query));
});

module.exports = router;
