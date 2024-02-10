const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const deleteReview = async (req, res) => {
	try {
		const client = new MongoClient(MONGO_URI);
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.deleteOne({ user: req.params.id });
		res.status(200).json({ status: 200 });
		await client.close();
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: req.params.id,
			message: err.message,
		});
	}
};

module.exports = deleteReview;
