const Schema = require('schema-js');


const Booking = new Schema({
    email: { type: String, required: true },
    tel: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    datetime: { type: String, required: true },
    service: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    key: { type: String, required: true },
    persons: { type: String, required: true },
    timestamp: { type: String, required: true }
})
module.exports = Booking;
