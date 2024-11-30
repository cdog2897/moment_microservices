
import express from 'express';
import {pinoHttp} from './utils/logging.js';
import stripeRoute from './routes/stripe.route.js'
import prodigiRoute from './routes/prodigi.route.js'

const app = express();

// Use request-based logger for log correlation
app.use(pinoHttp);

app.use(express.json())

app.use(stripeRoute)
app.use(prodigiRoute)

export default app;
