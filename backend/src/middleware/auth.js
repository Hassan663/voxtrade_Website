const jwt = require('jsonwebtoken');
const { users } = require('../controllers/authController');

exports.protect = async (req, res, next) => {
  try {
    let token;

    // Check for token in header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized. No token provided.' });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      
      // Find user
      const user = users.find(u => u.id === decoded.id);
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Attach user to request
      req.user = { id: user.id, email: user.email, plan: user.plan };
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Not authorized. Invalid token.' });
    }
  } catch (error) {
    next(error);
  }
};

// Optional auth - doesn't fail if no token
exports.optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        const user = users.find(u => u.id === decoded.id);
        if (user) {
          req.user = { id: user.id, email: user.email, plan: user.plan };
        }
      } catch (err) {
        // Token invalid, continue without user
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Restrict to certain plans
exports.restrictTo = (...plans) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (!plans.includes(req.user.plan)) {
      return res.status(403).json({ 
        error: 'Your current plan does not have access to this feature',
        requiredPlan: plans[0],
        currentPlan: req.user.plan
      });
    }

    next();
  };
};
