const path = require('path');
const crypto = require('crypto');
const asyncHandler = require('../middlewares/async');
const color = require('colors');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/users');

//Register User
//@Route POST /api/v1/auth/register
//Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, password, role} = req.body;

  //Create User
  const user = await User.create({
    name,    
    password,
    role,    
  });

  sendTokenResponse(user, 200, res);
});

//Login User
//@Route POST /api/v1/auth/login
//Public
exports.login = asyncHandler(async (req, res, next) => {
  const { name, password } = req.body;

  //Validate email and Password
  if (!name || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }
  //Check for user
  const user = await User.findOne({ name }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  //Check if Password matched
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

//Get Token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create Token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
  console.log('login');
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ token });
};

//Current User
//@Route POST /api/v1/auth/me
//Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

//Logout
//@Route GET /api/v1/auth/logout
//Private
exports.logout = asyncHandler(async (req, res, next) => {
  // res.header('token', 'none', {
  //   expires: new Date(Date.now() + 10 * 1000),
  //   httpOnly: true,
  // });
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  console.log('logout');
  res.status(200).json({
    success: true,
    data: {},
  });
});
