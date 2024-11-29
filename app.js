
import express from 'express';
import {pinoHttp} from './utils/logging.js';
import routes from './routes/stripe.route.js'

const app = express();

// Use request-based logger for log correlation
app.use(pinoHttp);

app.use(express.json())

app.use(routes)


export default app;
