// //LODASH EXERCISES
// // Load the full build.
const _ = require('lodash');
var collection = [1, 2, 3, 4, 5];

// //exercise1
console.log(_.shuffle(collection));

// //exercise2
console.log(_.mean(collection));

// //exercise3
console.log(_.isBoolean(collection));

// //ROBOTJS EXERCISES
var robot = require("robotjs");

robot.typeString("I AM A FELLOW HUMAN AND NOT A ROBOT");

robot.moveMouse(0, 400);
robot.moveMouseSmooth(1800, 400);


// WALLPAPER AXIOS AND DOWNLOAD FILE
const wallpaper = require('wallpaper');
var download = require('download-file');
var axios = require('axios');

var options = {
    directory: "./",
    filename: ""
}

axios.get("https://dog.ceo/api/breeds/image/random").then(function(data) {
    var image = data.data.message;
    download(image, options, function(err){
        if (err) throw err
        wallpaper.set(options.filename);
    });
});



//CATFACTS PDF
const catFacts = require('cat-facts');
let randomFact = catFacts.random();

//initialize variables
var PDFDocument, doc;
var fs = require('fs');

PDFDocument = require('pdfkit');
//create new instance of PDFDocument class
doc = new PDFDocument;
//create document
doc.pipe(fs.createWriteStream('output.pdf'));
doc.text(randomFact);
doc.end();

//PRETTIER JAVASCRIPT
//in package.json scripts



//NODEMAILER EXERCISE
const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    // Message object
    let message = {
        from: 'Lauren <sender@example.com>',
        to: 'Lauren <recipient@example.com>',
        subject: 'Nodemailer is unicorn friendly ✔',
        text: 'Hey girl hey!',
        html: '<p><b>YO</b> Harry Potter!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});




// nerdJS (extra npm module)

let nerds = require('nerds');

let singleHP = nerds.resolve('Harry Potter').asArray();
console.log(singleHP);

    