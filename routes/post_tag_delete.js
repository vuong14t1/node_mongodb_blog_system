var express = require('express');
var router = express.Router();
var Blogs = require('../models/blogs');

/* POST title modify page. */
router.post('/tag_delete/:blogId', function(req, res, next) {
	console.log(req.body);
	Blogs.findById(req.params.blogId, function(err, blogs){
		var tags = blogs[0].tags;
		if(err){
			console.log(err);
		} else {
			for(var i = 0; i < tags.length; i ++){
				if(tags[i] == req.body.tag){
					tags.splice(i, 1);
				}
			}
			blogs[0].save(function(err){
				if(err) console.log(err);
				res.send({delete: true});
			});
		}
	});

});

module.exports = router;