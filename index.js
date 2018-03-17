const express = require('express');
const mongoose = require('mongoose');
const BookingRouter = require('./api/Routes/BookingRoutes');
const nodemailer = require('nodemailer');
const Mail = require('./Services/Mail.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverConfig = require('./config');

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

//Express App setup
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Expose api routes 
app.use('/api', BookingRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

