const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    email: { type: String, required: true },
    tel: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    datetime: { type: String, required: true },
    service: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    cuid: { type: String, required: true },
    persons: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, required: true }
})
module.exports = mongoose.model('Booking', bookingSchema);;
