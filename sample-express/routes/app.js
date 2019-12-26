const express = require('express');
const router = express.Router();
const faker = require('faker/locale/ru');

/* GET home page. */
router.get('/cities', (req, res) => {
	var cities = [
		{
			"name":"Минск",
			"id":"minsk"
		},

		{
			"name":"Могилёв",
			"id":"mogilev"
		},
		{
			"name":"Гродно",
			"id":"grodno"
		},
		{
			"name":"Брест",
			"id":"brest"
		},
		{
			"name":"Витебск",
			"id":"vitebsk"
		},
		{
			"name":"Гомель",
			"id":"gomel"
		},				
	];

  res.render('cities',
  	{"cities":cities}
  	);	

});


router.get('/museums', (req, res) => {
	var museums = [
		{
			"name":"National gallery",
			"id":"id1"
		},

		{
			"name":"Historic museums",
			"id":"id2"
		},

		{
			"name":"Contemporary museums",
			"id": "id3"
		}				
	];

  res.render('museums',
  	{"museums":museums}
  	);	

});

router.get('/items', (req, res) => {
	var items = [
		{
			"name":"IMG1",
			"id":"id1",
			"url":"https://files.adme.ru/files/news/part_188/1884615/24361565-DSpDgIdW0AAKUG4-1536790943-728-a38cc21ed1-1536838846.jpg"
		},

		{
			"name":"IMG2",
			"id":"id2",
			"url":"https://italy4.me/wp-content/uploads/2015/01/Museo-Gregoriano-Egizio.jpg"
		},

		{
			"name":"IMG3",
			"id": "id3",
			"url": "http://tranzito.com/images/stories/206.png"
		}				
	];

  res.render('items',
  	{"items":items}
  	);	

});


module.exports = router;

