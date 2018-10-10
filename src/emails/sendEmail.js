const nodemailer = require('nodemailer');
const keys = require('./credentials').installed;
const tokens = require('./token');

const transporter = nodemailer.createTransport({
  service: 'joleedoestech gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    type: "oauth2",
    user: "joleedoestech@gmail.com",
    clientId: keys.client_id,
    clientSecret: keys.clientSecret,
    refreshToken: tokens.refresh_token,
    accessToken: tokens.access_token,
  },
  logger: false,
});

// verify connection configuration
function areWeSet() {
  transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });
}

function sendMessage(sendTo, assigned) {
  const mailOptions = {
     from: "joleedoestech@gmail.com",
     to: sendTo.email,
     subject: "Dinosaur Secret Santa Oxmas 2018 🎄😁",
     html:
      `<p>
        Hello ${sendTo.name} :), 
      </p><p>
        You have been assigned ${assigned.name} in the 2018 Dinosaur Oxmas Secret Santa :)<br>
        Guide budget is £5-£10, look forward to seeing you on the day :)
      </p><p>
        Thank you :)<br>
        The Oxmas Secret Santa Robot Fairy :P
      </p><br>🎄🎅🎄🎅🎄🎅🎄🎅<br><p>
      Something not right? Blame Jo ;P [seriously, let me know, and I'll try to fix it]
    </p>`,
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
}

  module.exports = { sendMessage, areWeSet };
