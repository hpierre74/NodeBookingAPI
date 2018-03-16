const Router = require('express');
const BookingController = require('../Controllers/BookingController');
const BookingRouter = new Router();

// Get all Bookings
BookingRouter.route('/bookings').get(BookingController.getBookings);

// Get one Booking by cuid
BookingRouter.route('/bookings/:id').get(BookingController.getBooking);

// Add a new Booking
BookingRouter.route('/booking').post(BookingController.addBooking);

// Delete a Booking by cuid
BookingRouter.route('/bookings/:id').delete(BookingController.deleteBooking);

module.exports = BookingRouter;