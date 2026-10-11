const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/User');

/**
 * Protect routes: verify JWT from HttpOnly cookie or Authorization Bearer header
 */
const authenticate = async (req, res, next) => {
  try {
    let token = null;

    // Check HttpOnly Cookie first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // Fall back to Authorization Bearer header
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Please log in to continue.',
      });
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret);

    // Verify user exists and is active
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User belonging to this token no longer exists.',
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Your account has been deactivated. Please contact support.',
      });
    }

    // Attach authenticated user to request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: error.name === 'TokenExpiredError'
          ? 'Session expired. Please log in again.'
          : 'Invalid authentication token.',
      });
    }
    next(error);
  }
};

/**
 * Role-based authorization middleware
 * @param  {...string} roles Allowed roles (e.g. 'admin')
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required.',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: insufficient permissions to perform this action.',
      });
    }

    next();
  };
};

module.exports = {
  authenticate,
  authorize,
};
