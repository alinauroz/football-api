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
        await Match.updateOne({
            _id: id
        }, {isLive})
    }

    if (action) {
        await Match.updateOne({
            _id: id
        }, {$push: { summary: {
                player,
                team,
                action
            }}
        });

        if (action === 'goal') {

            let goalCount = 0;

            io.sockets.emit('goal', {
                player,
                team,
                goals: goalCount,
            });

        }
        else {
            io.sockets.emit('matchUpdate', {
                action,
                team,
                player
            })
        }

    }

    res.send({
        status: 'success',
        data: {}
    })

});
