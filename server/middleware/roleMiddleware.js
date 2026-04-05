const { errorResponse } = require('../utils/apiResponse');

/**
 * Usage: authorize('admin', 'ngo')
 * Pass one or more allowed roles as arguments.
 * Always use AFTER the protect middleware.
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return errorResponse(
        res,
        403,
        `Role '${req.user.role}' is not authorized to access this route`
      );
    }
    next();
  };
};

module.exports = { authorize };