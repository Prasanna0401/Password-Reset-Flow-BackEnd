const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../utils/auth');

//Public Routes
router.post('/register',authController.register );
router.post('/login',authController.login);
router.get('/userInfo',auth.isAuthenticate,authController.userInfo);
router.get('/signout',authController.logout);
router.post('/resetPassword',authController.resetPassword);
router.post('/setNewPassword',authController.setNewPassword);

module.exports = router;