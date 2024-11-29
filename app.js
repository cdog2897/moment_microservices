
import express from 'express';
import {pinoHttp, logger} from './utils/logging.js';

const app = express();

// Use request-based logger for log correlation
app.use(pinoHttp);

const routes = require('./routes/index')
app.use(routes)

// // Example endpoint
// app.get('/', async (req, res) => {

//   // Use basic logger without HTTP request info
//   logger.info({logField: 'custom-entry', arbitraryField: 'custom-entry'}); // Example of structured logging


//   // Use request-based logger with log correlation
//   req.log.info('Child logger with trace Id.');
  
//   req.log.info('another example of a log.');

//   req.log.error("ERROR MESSAGE!!!")

//   req.log.warn("WARNING MESAGe")

//   res.send('Hello World!');


// });

export default app;
