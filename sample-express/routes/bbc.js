const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/city', (req, res) => {
	var city = [
		{
			"name":faker.address.city(),
		},

		{
			"name":faker.address.city(),
		},
		
		{
			"name":faker.address.city(),
		},
		
		{
			"name":faker.address.city(),
		},
		
		{
			"name":faker.address.city(),
		},
		
		{
			"name":faker.address.city(),
		},				
	];

  res.render('city',
  	{"city":city}
  	);	

});

router.get('/news', (req, res) => {
	var news = [
		{
			"url":faker.image.image(),
			"title":faker.lorem.sentence(),
			"text":faker.lorem.paragraph()	
		},

		{
			"url":faker.image.image(),
			"title":faker.lorem.sentence(),
			"text":faker.lorem.paragraph()
		},
		
		{
			"url":faker.image.image(),
			"title":faker.lorem.sentence(),
			"text":faker.lorem.paragraph()	
		},
		
		{
			"url":faker.image.image(),
			"title":faker.lorem.sentence(),
			"text":faker.lorem.paragraph()	
		},
		
		{
			"url":faker.image.image(),
			"title":faker.lorem.sentence(),
			"text":faker.lorem.paragraph()	
		},
	];

  res.render('news',
  	{"news":news}
  	);	

});


router.get('/places', (req, res) => {
	var places = [
		{
			"url":faker.image.city(),	
		},

		{
			"url":faker.image.city(),
		},
		
		{
			"url":faker.image.city(),	
		},
		
		{
			"url":faker.image.city(),
		},
		
		{
			"url":faker.image.city(),	
		},
	];

  res.render('places',
  	{"places":places}
  	);	

});

module.exports = router;

