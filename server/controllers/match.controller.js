const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Match = require('../models/match.model');
const factory = require('./handlerFactory');
const io = require('../utils/socket.io');

exports.getAll = factory.getAll(Match);

exports.addSummary = catchAsync(async (req, res, next) => {

    const id = req.params.id;

    const {
        action,
        player,
        team,
        isLive,
    } = req.body;

    if (typeof isLive !== undefined) {
        await Match.findOneAndUpdate({
            _id: id
        }, {isLive})
    }

    if (action) {
        await Match.updateOne({
            _id: id
        }, {
            $push: {
                player,
                team,
                action
            }
        })
    }

    res.send({
        status: 'success',
        data: {}
    })

});
