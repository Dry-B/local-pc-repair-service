const express = require('express');
const morgan = require('morgan');

const port = 4000;

const serverPing = require('./handlers/serverPing');
const getUnsplashPhoto = require('./handlers/getUnsplashPhoto');
const createReview = require('./handlers/createReview');
const getReviews = require('./handlers/getReviews');
const reCaptcha = require('./handlers/reCaptcha');
const updateReview = require('./handlers/updateReview');
const createEstimate = require('./handlers/createEstimate');
const getReview = require('./handlers/getReview');

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
	.get('/api/photo/:id', getUnsplashPhoto)
	.post('/api/review', createReview)
	.get('/api/reviews', getReviews)
	.post('/api/recaptcha', reCaptcha)
	.post('/api/review/update', updateReview)
	.post('/api/estimate', createEstimate)
	.get('api/review/:id', getReview)

	.get('*', (req, res) => {
		res.status(404).json({
			status: 404,
			message:
				'This is obviously not what you are looking for.',
		});
	})
	.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
