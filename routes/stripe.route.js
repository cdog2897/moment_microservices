
import express from 'express';
import { postPaymentIntent, receiveStripeWebhook } from '../controllers/stripe.controller.js'

const router = express.Router();

router.post('/postPaymentIntent', postPaymentIntent)
router.post('/stripeWebhook', receiveStripeWebhook)

export default router;