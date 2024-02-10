'use strict';
const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const getReview = async (req, res) => {
	try {
		const client = new MongoClient(MONGO_URI);
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.findOne({ user: req.params.id });
		await client.close();
		res.status(200).json({
			status: 200,
			data: result,
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: 'error',
		});
	}
};

module.exports = getReview;
