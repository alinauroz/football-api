const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Team = require('../models/team.model');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Team);

exports.createTeam = catchAsync(async (req, res, next) => {
    req.body.owner = req.user.id;
    let team = new Team(req.body);
    await team.save();
    res.send({
        status: 'success',
        data: team
    })
});

exports.requestAsMember = catchAsync(async (req, res, next) => {

    if (!req.body.teamId) {
        return next(
			new AppError(
				'Team is required',
				400
			)
		)
    }

    let team = await Team.findById(req.body.teamId);
    if (team) {
        if (team.membersRequest.indexOf(req.user.id) > -1) {
            return res.send({
                status: 'error',
                message: 'A request is already sent'
            }, 400)
        }
        if (team.members.indexOf(req.user.id) > -1) {
            return res.send({
                status: 'error',
                message: 'You are already member of this team'
            }, 400)
        }
    }

    await Team.update(
        {_id: req.body.teamId},
        {$push: {membersRequest: req.user.id}}
    );

    res.send({
        status: 'success',
        data: {}
    })

});

exports.acceptMemberRequest = catchAsync(async (req, res, next) => {
    const {
        teamId, userId
    } = req.body;

    const owner = req.user.id;

    let team = await Team.findById(teamId);

    if (!teamId || !userId) {
        return next (
            new AppError(
                'Team Id and User Id are required',
                400
            )
        );
    }

    if (!team) {
        return next(
            new AppError(
                'Team not found',
                404
            )
        )
    }
    else if (owner !== team.owner) {
        return next(
            new AppError(
                'Only team owner can accept requests',
                401
            )
        )
    }

    if (team.membersRequest.indexOf(userId) === -1) {
        return next(
            new AppError(
                'No such request found',
                404
            )
        )
    }

    await Team.updateOne(
        {_id: teamId},
        {
            $pull: {membersRequest: userId},
            $push: {members: userId}
        }
    );

    res.send({
        status: 'success',
        data: team,
    });

});