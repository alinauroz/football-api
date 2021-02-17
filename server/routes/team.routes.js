const express = require('express');
const teamController = require('../controllers/team.controller');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.get('/', teamController.getAll)

router.use(authController.protect);

router.post('/', teamController.createTeam);
router.post('/join_request', teamController.requestAsMember);
router.post('/accept_member_request', teamController.acceptMemberRequest);

module.exports = router;