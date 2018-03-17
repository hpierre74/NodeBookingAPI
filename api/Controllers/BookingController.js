const Booking = require("../Models/Booking");
const cuid = require("cuid");

class BookingController {
  static getBookings(req, res) {
    Booking.find()
      .sort("date")
      .exec((err, bookings) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ bookings });
      });
  }
  static getBooking(req, res) {
    Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ booking });
    });
  }

  static addBooking(req, res) {
    if (
      !req.body.booking.firstname ||
      !req.body.booking.lastname ||
      !req.body.booking.tel ||
      !req.body.booking.email ||
      !req.body.booking.time ||
      !req.body.booking.date ||
      !req.body.booking.service ||
      !req.body.booking.persons
    ) {
      res.status(403).end();
    }
    const newBooking = new Booking(req.body.booking);
    newBooking.cuid = cuid();
    newBooking.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ booking: saved });
    });
  }

  static deleteBooking(req, res) {
    Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
        if (err) {
          res.status(500).send(err);
        }  
        booking.remove(() => {
          res.status(200).end();
        });
    });
  }
}
module.exports = BookingController;
