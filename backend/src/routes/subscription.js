const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const subscriptionController = require('../controllers/subscriptionController');
const { protect } = require('../middleware/auth');
const { validateRequest } = require('../middleware/validateRequest');

// Create checkout session
router.post(
  '/create-checkout-session',
  protect,
  [
    body('priceId').notEmpty().withMessage('Price ID is required'),
    body('promoCode').optional().trim(),
  ],
  validateRequest,
  subscriptionController.createCheckoutSession
);

// Get subscription status
router.get('/status', protect, subscriptionController.getSubscriptionStatus);

// Cancel subscription
router.post('/cancel', protect, subscriptionController.cancelSubscription);

// Apply promo code
router.post(
  '/apply-promo',
  protect,
  [
    body('promoCode').trim().notEmpty().withMessage('Promo code is required'),
  ],
  validateRequest,
  subscriptionController.applyPromoCode
);

// Stripe webhook
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  subscriptionController.handleWebhook
);

module.exports = router;
