const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validateRequest');

// All routes require authentication
router.use(protect);

// Get current user profile
router.get('/me', userController.getMe);

// Update profile
router.put(
  '/me',
  [
    body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().normalizeEmail().withMessage('Invalid email'),
  ],
  validateRequest,
  userController.updateProfile
);

// Change password
router.put(
  '/change-password',
  [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword')
      .isLength({ min: 8 })
      .withMessage('New password must be at least 8 characters'),
  ],
  validateRequest,
  userController.changePassword
);

// Delete account
router.delete('/me', userController.deleteAccount);

module.exports = router;
