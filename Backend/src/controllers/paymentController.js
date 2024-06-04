const Transaction = require('../models/transaction');
const { generatePaymentLink } = require('../utils/security');

exports.createPaymentLink = async (req, res) => {
  const { transactionId } = req.body;

  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    const paymentLink = generatePaymentLink(transactionId);
    res.json({ paymentLink });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
