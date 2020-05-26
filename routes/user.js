var express = require('express');
var router = express.Router();

const {register, login, user} = require('../controllers/user');
const auth = require('../middleware/auth')

// @route  POST /api/user/register
// @desc   Registration
// @access Public
router.route('/register').post(register);
// @route  POST /api/user/login
// @desc   Login
// @access Public
router.route('/login').post(login)
// @route  GET /api/user
// @desc   Get user
// @access Private
router.route('/').get(auth, user);
module.exports = router;