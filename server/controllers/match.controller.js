const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Match = require('../models/match.model');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Match);
