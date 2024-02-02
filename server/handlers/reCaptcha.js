require('dotenv').config();

const RECAPTCHA_API_URL =
	'https://www.google.com/recaptcha/enterprise.js';
const KEY = process.env.RECAPTCHA_KEY;

const reCaptcha = async (req, res) => {
	try {
		const response = await fetch(
			`${RECAPTCHA_API_URL}?render=${KEY}`
		);
		if (!response.ok) {
			throw new Error('API response was not ok');
		}
		res.status(200);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = reCaptcha;
