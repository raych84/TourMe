module.exports = fx => {

	return (req, res, next) => fx(req, res, next).catch(err => {
		res.status(400).json({
			status: 'fail',
			message: 'An error ocurred',
			error: err
		});

		console.log(err)
	})

}