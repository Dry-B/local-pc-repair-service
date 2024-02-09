const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;


const createReview = async (req, res) => {

	const destructuredFormData = {
		name: req.body.formData.name,
		message: req.body.formData.message,
		user: req.body.formData.user,
	};

	try {
		const client = new MongoClient(MONGO_URI);
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.insertOne(destructuredFormData);
		res.status(200).json({
			status: 200,
			message: 'Data submitted to db',
		});
		await client.close();
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: destructuredFormData,
			message: err.message,
		});
	}
};

module.exports = createReview;