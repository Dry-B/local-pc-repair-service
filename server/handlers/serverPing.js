const serverPing = async (req, res) => {
	console.log('server pinged');
	res.status(200).json({
		status: 200,
		message: 'server successfully pinged',
	});
};

module.exports = serverPing;
