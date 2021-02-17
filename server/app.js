const express = require('express');
const bodyParser = require('body-parser');
const rootRouter = require('./routes/router')
const globalErrorHandler = require('./controllers/error.controller')
const AppError = require('./utils/appError')
const cookieParser = require('cookie-parser')

const app = express();

app.use(bodyParser.json({limit: '250mb'}));
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser())

app.use('/', rootRouter)
app.all('*', (req, res, next) => {
	const err = new AppError(`Route ${req.originalUrl} does not exist`, 404)
	next(err)
})
app.use(globalErrorHandler)

module.exports = app;