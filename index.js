const functions = require('firebase-functions');
const BookingRouter = require('./api/Routes/BookingRoutes');
const admin = require('firebase');
admin.initializeApp(functions.config().firebase);
const nodemailer = require('nodemailer');
const Mail = require('./Services/Mail.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Express App setup
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Expose api routes 
app.use('/api', BookingRouter);

exports.bookingAPI = functions.https.onRequest(app);

exports.confirmBookingEmail = functions.database.ref('/bookings/{key}').onCreate((event) => {
    return Mail.sendConfirmMail(event);
  });



