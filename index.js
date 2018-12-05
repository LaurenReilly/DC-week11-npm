// //LODASH EXERCISES
// // Load the full build.
// const _ = require('lodash');
// var collection = [1, 2, 3, 4, 5];

// //exercise1
// console.log(_.shuffle(collection));

// //exercise2
// console.log(_.mean(collection));

// //exercise3
// console.log(_.isBoolean(collection));

// //ROBOTJS EXERCISES
// var robot = require("robotjs");

// robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");

// robot.moveMouse(0, 400);
// robot.moveMouseSmooth(1800, 400);


// WALLPAPER AXIOS AND DOWNLOAD FILE
// const wallpaper = require('wallpaper');
// var download = require('download-file');
// var axios = require('axios');

// var options = {
//     directory: "./",
//     filename: ""
// }

// axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
//     var image = data.data.message;
//     download(image, options, function(err){
//         if (err) throw err
//         wallpaper.set(options.filename);
//     });
// });



//CATFACTS PDF
// const catFacts = require('cat-facts');
// let randomFact = catFacts.random();

// //initialize variables
// var PDFDocument, doc;
// var fs = require('fs');

// PDFDocument = require('pdfkit');
// //create new instance of PDFDocument class
// doc = new PDFDocument;
// //create document
// doc.pipe(fs.createWriteStream('output.pdf'));
// doc.text(randomFact);
// doc.end();

//PRETTIER JAVASCRIPT
const prettier = require('prettier');

//I dont even...what?

//NODEMAILER EXERCISE
'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});


    