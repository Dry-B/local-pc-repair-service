const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;


const createReview = async (req, res) => {
	const client = new MongoClient(MONGO_URI);
	try {
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.insertOne(req.body);
		res.status(201).json({ status: 201 });
		await client.close();
	} catch (err) {
		console.error('Error:', error);
		res.status(500).json({
			status: 500,
			data: req.body,
			message: err.message,
		});
	}
};

module.exports = createReview;