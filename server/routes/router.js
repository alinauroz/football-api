const express = require('express');
const router = express();

const userRouter = require('./user.routes');
const teamRouter = require('./team.routes');
const newsRouter = require('./news.routes');
const adminRouter = require('./admin.routes');

router.use('/users', userRouter);
router.use('/teams', teamRouter);
router.use('/news', newsRouter);
router.use('/admins', adminRouter);

module.exports = router;