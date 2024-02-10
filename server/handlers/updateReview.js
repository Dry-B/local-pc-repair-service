const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const updateReview = async (req, res) => {
	const destructuredFormData = {
		message: req.body.formData.message,
		user: req.body.formData.user,
	};
	try {
		const client = new MongoClient(MONGO_URI);
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.updateOne(
				{ user: req.body.formData.user },
				{ $set: { message: req.body.formData.message } }
			);
		res.status(200).json({
			status: 200,
			message: 'Review Updated!',
		});
		await client.close();
	} catch (err) {
		res.status(500).json({
			status: 500,
			data: req.body,
			message: err.message,
		});
	}
};

module.exports = updateReview;
