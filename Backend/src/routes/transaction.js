const express = require('express');
const { getTransactions, createDummyTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.get('/', getTransactions);
router.post('/dummy', createDummyTransactions);

module.exports = router;
