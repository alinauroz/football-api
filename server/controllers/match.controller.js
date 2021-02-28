const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Match = require('../models/match.model');
const factory = require('./handlerFactory');

exports.getAll = catchAsync(async (req, res, next) => {

    const body = req.body;

    delete body.winner;
    delete body.summary;
    delete body.result;
});

