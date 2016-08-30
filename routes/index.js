var express = require('express');
var router = express.Router();

var startups = [
	{id:0, name:'Uber', location:'California', ceo:'Travis Kalanick', description: 'Uber Technologies Inc. is an American multinational online transportation network company headquartered in San Francisco, California. It develops, markets and operates the Uber mobile "app", which allows consumers with smartphones to submit a trip request, which the software program then automatically sends to the Uber driver nearest to the consumer, alerting the driver to the location of the customer. Uber drivers use their own personal cars.'},
	{id:1, name:'Slack', location:'New York', ceo:'Stewart Butterfield', description: 'Slack is a cloud-based team collaboration tool.'},
	{id:2, name:'Squarespace', location:'New York', ceo:'Anthony Casalena', description: 'Squarespace is a SaaS-based content management system-integrated website builder, blogging platform and hosting service. The system allows individuals and businesses to create and maintain websites and blogs.'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
	// var data = {
	// 	name:'felice',
	// 	location:'new york',
	// 	occupation:'software'
	// }
  	// res.render('index', data);
  var list = '<ol>'
  for (var i=0; i<startups.length; i++){
  	var startup = startups[i]
  	list += '<li><a href="/startup?id='+startup.id+'">'+startup.name+'</li>'
  }

  list += '</ol>'
  res.render('index', {list: list});
});

router.get('/:page', function(req, res, next) {
	var page = req.params.page

	var id = req.query.id 
	var startup = startups[id]

	res.render(page, startup)

});

module.exports = router;
