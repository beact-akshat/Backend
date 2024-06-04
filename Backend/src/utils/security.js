const crypto = require('crypto');

exports.generatePaymentLink = (transactionId) => {
  const token = crypto.randomBytes(16).toString('hex');
  return `${process.env.PAYMENT_URL}/payment/${transactionId}?token=${token}`;
};
