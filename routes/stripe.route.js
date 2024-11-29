
import express from 'express';
import { postPaymentIntent } from '../controllers/stripe.controller.js'

const router = express.Router();

router.post('/postPaymentIntent', postPaymentIntent)

export default router;