const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


class Mail {
    static Send({email, subject, text}) {
        const mailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            private: true,
            auth: {
                user: process.env.mailuser,
                pass: process.env.mailpassword
            }
        });
        const mailOptions = {
            from: '"Your Name" <yourmail@gmail.com>',
            bcc: email,
            subject: subject,
            text: text
        }
        return mailTransport.sendMail(mailOptions).then(() => {
            return true;
        }).catch(error => {
            return error;
        })
    }
    static sendConfirmMail(event) {
        const newBooking = event.data.val();
        if (newBooking.email!==undefined) {
            return Mail.Send({
                email: newBooking.email, 
                subject:'Votre réservation du '+ newBooking.date,
                text: 'Réservation effectuée pour le '+newBooking.date 
            }).then(() => {
                return console.log('mail sent to '+ newBooking.email);
            }).catch(error => {
                return console.log(error, 'mail failed deliver to '+newBooking.date );
            })
        } else { 
            return
        }
    }
}
module.exports = Mail;