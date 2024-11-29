
const express = require('express');
const stripe = require('./stripe.route')
const router = express.Router();


router.use('/createPaymentIntent')