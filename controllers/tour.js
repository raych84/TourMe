const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tour');

exports.create = catchAsync(async (req, res, next) => {

	res.status(200).json({
		status: 'success',
		message: 'A new tour has been created'
	})

});


exports.getAll = catchAsync(async (req, res, next) => {

});


exports.getOne = catchAsync(async (req, res, next) => {

});


exports.update = catchAsync(async (req, res, next) => {

});


exports.delete = catchAsync(async (req, res, next) => {


});
