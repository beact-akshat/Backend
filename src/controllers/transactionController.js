const Product = require('../models/product');
const Transaction = require('../models/transaction');
// const faker = require('faker');
const User = require('../models/user');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('product').populate('user');
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createDummyTransactions = async (req, res) => {
  try {
    const products = await Product.find();
    const users = await User.find();

    for (let i = 0; i < 100; i++) {
      const product = products[Math.floor(Math.random() * products.length)];
      const user = users[Math.floor(Math.random() * users.length)];
      const quantity = faker.datatype.number({ min: 1, max: 10 });
      const totalAmount = product.price * quantity;

      await Transaction.create({
        product: product._id,
        user: user._id,
        quantity,
        totalAmount,
      });
    }

    res.status(201).json({ message: 'Dummy transactions created' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
