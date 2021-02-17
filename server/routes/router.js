const express = require('express')
const router = express()

const userRouter = require('./user.routes')

router.use('/users', userRouter)

module.exports = router;