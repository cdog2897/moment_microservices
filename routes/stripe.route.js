
import express from 'express';
import { getPaymentIntent } from '../controllers/stripe.controller.js'

const router = express.Router();


router.get('/getPaymentIntent', getPaymentIntent)

export default router;