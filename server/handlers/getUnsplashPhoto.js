require('dotenv').config();

const UNSPLASH_API_URL = 'https://api.unsplash.com/';
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const getUnsplashPhoto = async (req, res) => {
	try {
		const response = await fetch(
			`${UNSPLASH_API_URL}/photos/${req.params.id}?client_id=${ACCESS_KEY}`
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const photos = await response.json();
		res.json(photos);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = getUnsplashPhoto;
