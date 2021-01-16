const jwt = require('jsonwebtoken');
const asynchandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/users');
const asyncHandler = require('./async');

//Protect routes
// exports.protect = asynchandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   } else if (req.cookies.token) {
//     token = req.cookies.token;
//   }

  //Make sure token exists
//   if (!token) {
//     return next(new ErrorResponse('Not authorized to access this route', 401));
//   }

//   try {
//     //Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     console.log(decoded);
//     req.user = await (await User.findById(decoded.id)).select('-password')
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Not authorized to access this route', 401));
//   }
// });

//Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role ==='admin')) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};


exports.protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})