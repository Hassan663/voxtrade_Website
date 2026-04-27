const { users } = require('./authController');

// Promo codes
const promoCodes = {
  'VOXFNF1': { type: 'trial', months: 3, description: '3 months free' },
  'VOXREDDIT': { type: 'trial', months: 1, description: '1 month free' },
};

// Stripe would be initialized here in production
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res, next) => {
  try {
    const { priceId, promoCode } = req.body;
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // In production, create Stripe checkout session
    // const session = await stripe.checkout.sessions.create({
    //   customer_email: user.email,
    //   mode: 'subscription',
    //   line_items: [{ price: priceId, quantity: 1 }],
    //   success_url: `${process.env.FRONTEND_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.FRONTEND_URL}/pricing`,
    //   ...(promoCode && { discounts: [{ coupon: promoCode }] }),
    // });

    // For demo, return mock session
    const mockSession = {
      id: 'cs_test_' + Date.now(),
      url: 'https://checkout.stripe.com/demo',
    };

    res.json({
      sessionId: mockSession.id,
      url: mockSession.url,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSubscriptionStatus = async (req, res, next) => {
  try {
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      plan: user.plan || 'free',
      status: user.subscriptionStatus || 'active',
      currentPeriodEnd: user.subscriptionEnd || null,
      cancelAtPeriodEnd: user.cancelAtPeriodEnd || false,
    });
  } catch (error) {
    next(error);
  }
};

exports.cancelSubscription = async (req, res, next) => {
  try {
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.plan === 'free') {
      return res.status(400).json({ error: 'No active subscription to cancel' });
    }

    // In production, cancel via Stripe
    // await stripe.subscriptions.update(user.stripeSubscriptionId, {
    //   cancel_at_period_end: true,
    // });

    user.cancelAtPeriodEnd = true;

    res.json({
      message: 'Subscription will be canceled at the end of the billing period',
      cancelAtPeriodEnd: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.applyPromoCode = async (req, res, next) => {
  try {
    const { promoCode } = req.body;
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const promo = promoCodes[promoCode.toUpperCase()];
    if (!promo) {
      return res.status(400).json({ error: 'Invalid promo code' });
    }

    // In production, apply via Stripe
    res.json({
      valid: true,
      description: promo.description,
      type: promo.type,
      months: promo.months,
    });
  } catch (error) {
    next(error);
  }
};

exports.handleWebhook = async (req, res, next) => {
  try {
    // In production, verify Stripe webhook signature
    // const sig = req.headers['stripe-signature'];
    // const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    // Handle different event types
    // switch (event.type) {
    //   case 'checkout.session.completed':
    //     // Update user subscription
    //     break;
    //   case 'customer.subscription.updated':
    //     // Handle subscription changes
    //     break;
    //   case 'customer.subscription.deleted':
    //     // Handle cancellation
    //     break;
    // }

    res.json({ received: true });
  } catch (error) {
    next(error);
  }
};
