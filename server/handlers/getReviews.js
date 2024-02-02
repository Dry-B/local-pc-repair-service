'use strict';
const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const getFlights = async (req, res) => {

	const sanitizeData = (data) => {
		const sanitizedInfo = [];
		data.map((e) => {
			sanitizedInfo.push([
				{
					Name: e.formData.name,
					Message: e.formData.message,
				},
			]);
		});
		return sanitizedInfo;
	};

	try {
		const client = new MongoClient(MONGO_URI);
		await client.connect();
		const db = client.db('PC_Repair');
		const result = await db
			.collection('reviews')
			.find()
			.toArray();
		await client.close();
		res.status(200).json({
			status: 200,
			data: sanitizeData(result),
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: 'error',
		});
	}
};

module.exports = getFlights;
