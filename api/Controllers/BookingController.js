const functions = require('firebase-functions');
const Booking = require('../Models/Booking');
const Firebase = require('../../Services/FirebaseAdmin');
const admin = require('firebase');

class BookingController {

    static getBookings(req, res) {
        return admin.database().ref('bookings').once('value')
        .then(snap => {
            res.json( snap.val() );
        })
        .catch(error => {
            res.status(500).send(error);
        })
    }
    static getBooking(req, res) {
        if(req.params.id !== undefined) {
            return admin.database().ref('bookings/'+ req.params.id).once('value')
            .then(snap => {
                res.json( snap.val() );
            })
            .catch(error => {
                res.status(500).send(error);
            })
        }
    }
    static addBooking(req, res) {
        if(Booking.validate(req.body)){
            req.body.key = admin.database().ref('bookings').push().key;
            return admin.database()
            .ref('bookings/'+req.body.key)
            .set(req.body)
            .then((success => {
                res.status(201).send('Booking added')
            }))
            .catch(error => {
                res.status(403).send(error);
            })
        }
    }
    static deleteBooking(req, res) {
        if(req.params.id !== undefined){
            return admin.database()
            .ref('bookings/'+req.params.id)
            .remove()
            .then((success => {
                res.status(201).send('Booking deleted')
            }))
            .catch(error => {
                res.status(403).send(error);
            })
        }
    }
}
module.exports = BookingController;