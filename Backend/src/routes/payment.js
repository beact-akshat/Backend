const express = require('express');
const { createPaymentLink } = require('../controllers/paymentController');
const router = express.Router();

router.post('/generate-link', createPaymentLink);

module.exports = router;
