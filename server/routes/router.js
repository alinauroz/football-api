const express = require('express')
const router = express()

const userRouter = require('./user.routes')
const teamRouter = require('./team.routes')

router.use('/users', userRouter);
router.use('/teams', teamRouter);

module.exports = router;