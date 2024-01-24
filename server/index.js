const express = require('express');
const morgan = require('morgan');

const port = 4000;

const serverPing = require('./handlers/serverPing');
const getUnsplashPhoto = require('./handlers/getUnsplashPhoto');
const createReview = require('./handlers/createReview');

express()
	.use(morgan('tiny'))
	.use(function (req, res, next) {
		res.header(
			'Access-Control-Allow-Methods',
			'OPTIONS, HEAD, GET, PUT, POST, DELETE'
		);
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept'
		);
		next();
	})
	.use(express.json())
	.use(express.urlencoded({ extended: false }))

	.get('/serverping', serverPing)
	.get('/api/getUnsplashPhoto/:id', getUnsplashPhoto)
	.post('/api/createReview', createReview)

	.get('*', (req, res) => {
		res.status(66).json({
			status: 66,
			message:
				'This is obviously not what you are looking for.',
		});
	})
	.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
