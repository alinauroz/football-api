const express = require('express');
const router = express();

const userRouter = require('./user.routes');
const teamRouter = require('./team.routes');
const newsRouter = require('./news.routes');
const adminRouter = require('./admin.routes');
const imagesRoute = require('./images.routes');
const matchRoute = require('./matches.routes');
const tournamentRoute = require('./tournament.routes');
const exerciseRoute = require('./exercise.routes');

router.use('/users', userRouter);
router.use('/teams', teamRouter);
router.use('/news', newsRouter);
router.use('/admins', adminRouter);
router.use('/images', imagesRoute);
router.use('/matches', matchRoute);
router.use('/tournaments', tournamentRoute);
router.use('/exercise', exerciseRoute);

module.exports = router;