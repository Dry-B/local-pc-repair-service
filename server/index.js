const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
	console.log('test');
	res.send({ data: 'Hello World!' });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
