const crypto = require('crypto');

// In production, use MongoDB and send emails
const contacts = [];

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = {
      id: crypto.randomUUID(),
      name,
      email,
      subject,
      message,
      status: 'pending',
      createdAt: new Date(),
    };

    contacts.push(contact);

    // In production, send email notification to support team
    // and confirmation email to user

    res.status(201).json({
      message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.',
      ticketId: contact.id,
    });
  } catch (error) {
    next(error);
  }
};

// Export for admin access
exports.contacts = contacts;
