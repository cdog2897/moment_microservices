

import express from 'express';
import { submitOrder } from '../controllers/prodigi.controller.js';


const router = express.Router();

router.post('/submitOrder', submitOrder)

export default router;