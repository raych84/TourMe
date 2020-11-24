// Import Node Modules
const { promisify } = require('util');


// Import NPM packages
const jwt = require('jsonwebtoken');


// Import User modules
const catchAsync = require('../utils/catchAsync');
const sendError = require('../utils/sendError');
const User = require('../models/user');
const { default: Axios } = require('axios');


const signToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRY
	})
}


const sendToken = (user, req, res, status = 200) => {

	user.password = undefined;

	const token = signToken(user.id);

	res.cookie('jwt', token, {
		expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRY * 1000 * 60 * 60 * 24),
		secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
		httpOnly: true
	})

	res.status(status).json({
		status: 'success',
		token,
		data: user
	})

}


exports.signup = catchAsync(async (req, res, next) => {

	const user = await User.create(req.body);

	sendToken(user, req, res);

});


exports.login = catchAsync(async (req, res, next) => {

	const { email, password } = req.body;

	if (!email || !password) return sendError(res, 400, 'Please include a username and password');

	const user = await User.findOne({ email }).select('+password');

	if (!user || !(await user.isPasswordCorrect(password, user.password))) return sendError(res, 400, 'Email or password is incorrect');


	sendToken(user, req, res);

});


exports.logout = catchAsync(async (req, res, next) => {

	res.cookie('jwt', 'logged-out', {
		expires: new Date(Date.now() + 10000),
		httpOnly: true
	})

	res.status(200).json({
		status: 'success',
		message: 'Logged Out'
	})

});


exports.protect = catchAsync(async (req, res, next) => {

	console.log('PROTECTED ROUTE');

	const authHeader = req.headers.authorization;
	let token;

	if (authHeader && authHeader.startsWith('Bearer')) token = authHeader.split(' ')[1];
	else if (req.cookies.jwt) token = req.cookies.jwt;

	if (!token) return sendError(res, 401, 'You are not logged in. Please log in to continue');

	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	const user = await User.findById(decoded.id);

	if (!user) return sendError(res, 401, 'Invalid JSON Web token. Please log in again to continue');

	req.user = user;

	next();

});
