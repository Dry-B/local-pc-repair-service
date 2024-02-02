const serverPing = async (req, res) => {

	try {
		console.log('server pinged');
		res.status(200).json({
			status: 200,
			message: 'server successfully reached',
		});
	} catch (err) {
		res.status(500).json({
			status: 500,
			message: 'server could not be reached',
		});
	}
};

module.exports = serverPing;
