

const express = require('express');

const router = express.Router();

const stripeController = require('../controllers/stripe.controller');

router.route('/getPaymentIntent')
    .get(stripeController.getPaymentIntent);

module.exports = router;
