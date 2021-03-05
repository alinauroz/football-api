const express = require('express');
const matchController = require('../controllers/match.controller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.get('/', matchController.getAll);

module.exports = router;