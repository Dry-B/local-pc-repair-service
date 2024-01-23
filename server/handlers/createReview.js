const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const createReview = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		const db = client.db('PC_Repair');

		const result = await db
			.collection('reviews')
			.insertOne(req.body);

		res.status(201).json({ status: 201, data: req.body });
	} catch (err) {
		console.log(err.stack);
		res.status(500).json({
			status: 500,
			data: req.body,
			message: err.message,
		});
	}

	await client.close();
};
