const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

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

router.get('/tree', (req, res) => {
	var tree = [
		{
			"address":faker.address.streetName(),
			"url":"http://greenbelarus.info/files/styles/800px/public/field/image/ploshchad_1.jpg?itok=YbqPZXeG",
			"height":faker.random.number({
				'min':5,
				'max':15
			}),
			"toys":faker.random.number({
				'min':50,
				'max':200
			})
		},

		{
			"address":faker.address.streetName(),
			"url":"https://img3.eadaily.com/r650x450/o/2b8/2b07a3ae2b280d9e020ed42ececee.jpg",
			"height":faker.random.number({
				'min':5,
				'max':15
			}),
			"toys":faker.random.number({
				'min':50,
				'max':200
			})
		},
		
		{
			"address":faker.address.streetName(),
			"url":"https://images.unian.net/photos/2017_12/1514052958-8297.jpg",
			"height":faker.random.number({
				'min':5,
				'max':15
			}),
			"toys":faker.random.number({
				'min':50,
				'max':200
			})
		},
		
		{
			"address":faker.address.streetName(),
			"url":"https://riavrn.ru/upload/preview/e/8/e/e8e37d6618213e7a3ad2d8ba3d9970ed.jpeg",
			"height":faker.random.number({
				'min':5,
				'max':15
			}),
			"toys":faker.random.number({
				'min':50,
				'max':200
			})
		},
		
		{
			"address":faker.address.streetName(),
			"url":"https://riavrn.ru/upload/preview/e/8/e/e8e37d6618213e7a3ad2d8ba3d9970ed.jpeg",
			"height":faker.random.number({
				'min':5,
				'max':15
			}),
			"toys":faker.random.number({
				'min':50,
				'max':200
			})
		},
	];

  res.render('tree',
  	{"tree":tree}
  	);	

});



module.exports = router;

