const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Team = require('../models/team.model');
const factory = require('./handlerFactory');

exports.createTeam = catchAsync(async (req, res, next) => {
    req.body.owner = req.user.id;
    let team = new Team(req.body);
    await team.save();
    res.send({
        status: 'success',
        data: team
    })
});