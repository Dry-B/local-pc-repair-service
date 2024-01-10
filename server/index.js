const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(morgan('tiny'));
app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Methods',
		'OPTIONS, HEAD, GET, PUT, POST, DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/serverping', (req, res) => {
	res.status(200).json({
		status: 200,
		message: 'server ping',
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
