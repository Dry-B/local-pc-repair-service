const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const port = 4000;

const serverPing = require('./handlers/serverPing');
const getUnsplashPhoto = require('./handlers/getUnsplashPhoto');

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
	.use(cors())

	.get('/serverping', serverPing)
	.get('/api/getUnsplashPhoto', getUnsplashPhoto)

	.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
