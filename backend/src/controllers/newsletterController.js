const crypto = require('crypto');

// In production, use MongoDB
const subscribers = [];

exports.subscribe = async (req, res, next) => {
  try {
    const { email, name } = req.body;

    // Check if already subscribed
    const existing = subscribers.find(s => s.email === email);
    if (existing) {
      if (existing.confirmed) {
        return res.status(400).json({ error: 'Email already subscribed' });
      }
      // Resend confirmation
      return res.json({ message: 'Confirmation email resent. Please check your inbox.' });
    }

    // Create subscriber
    const subscriber = {
      id: crypto.randomUUID(),
      email,
      name: name || '',
      confirmed: false,
      confirmationToken: crypto.randomBytes(32).toString('hex'),
      subscribedAt: new Date(),
    };

    subscribers.push(subscriber);

    // In production, send confirmation email here
    // const confirmUrl = `${process.env.FRONTEND_URL}/newsletter/confirm/${subscriber.confirmationToken}`;

    res.status(201).json({
      message: 'Thanks for subscribing! Please check your email to confirm.',
    });
  } catch (error) {
    next(error);
  }
};

exports.unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const subscriberIndex = subscribers.findIndex(s => s.email === email);
    if (subscriberIndex === -1) {
      return res.json({ message: 'You have been unsubscribed.' });
    }

    subscribers.splice(subscriberIndex, 1);

    res.json({ message: 'You have been unsubscribed successfully.' });
  } catch (error) {
    next(error);
  }
};

exports.confirmSubscription = async (req, res, next) => {
  try {
    const { token } = req.params;

    const subscriber = subscribers.find(s => s.confirmationToken === token);
    if (!subscriber) {
      return res.status(400).json({ error: 'Invalid confirmation token' });
    }

    subscriber.confirmed = true;
    subscriber.confirmationToken = undefined;
    subscriber.confirmedAt = new Date();

    // In production, send welcome email here

    res.json({ message: 'Subscription confirmed! Welcome to VoxTrade.' });
  } catch (error) {
    next(error);
  }
};

// Export for other modules
exports.subscribers = subscribers;
