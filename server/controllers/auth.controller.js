const crypto = require('crypto')
const User = require('../models/user.model')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

const {
	createSendToken,
	clearJwtCookie,
	createProtectController,
} = require('../utils/auth')

exports.signup = catchAsync(async (req, res, next) => {
	const {
		firstName,
		lastName,
		email,
		password,
		country,
		state,
		city,
		zip,
		phone,
		company,
		website,
		paypalId,
		address1,
		address2,
		humanKey
	} = req.body
	const newUser = new User({
		firstName,
		lastName,
		email,
		password,
		country,
		state,
		city,
		zip,
		phone,
		company,
		website,
		paypalId,
		address1,
		address2,
    })
    
	await newUser.save();
});