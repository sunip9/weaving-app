const express = require('express');
const {
  register,
  login,
  getMe,
  logout,
  
} = require('../controllers/users');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);

module.exports = router;
