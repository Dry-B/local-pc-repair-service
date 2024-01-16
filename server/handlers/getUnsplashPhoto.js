require('dotenv').config();

const UNSPLASH_API_URL = 'https://api.unsplash.com/';
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const getUnsplashPhoto = async (req, res) => {
	console.log(ACCESS_KEY);
	try {
		const response = await fetch(
			`${UNSPLASH_API_URL}/photos?client_id=${ACCESS_KEY}`
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const photos = await response.json();
		res.json(photos);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = getUnsplashPhoto;
