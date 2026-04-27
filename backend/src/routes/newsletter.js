const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const newsletterController = require('../controllers/newsletterController');
const { validateRequest } = require('../middleware/validateRequest');

// Subscribe to newsletter
router.post(
  '/subscribe',
  [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('name').optional().trim(),
  ],
  validateRequest,
  newsletterController.subscribe
);

// Unsubscribe from newsletter
router.post(
  '/unsubscribe',
  [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  ],
  validateRequest,
  newsletterController.unsubscribe
);

// Confirm subscription (double opt-in)
router.get('/confirm/:token', newsletterController.confirmSubscription);

module.exports = router;
