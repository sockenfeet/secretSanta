const Base64 = require('js-base64').Base64;
const google = require('googleapis');
const keys = require('./credentials').installed;
const redirectUri = keys.redirect_uris[keys.redirect_uris.length - 1];

const authorisation = new google.google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  redirectUri
);
const gmail = google.google.gmail({
  auth: authorisation,
});

function sendMessage(userId, email, callback) {
    // Using the js-base64 library for encoding:
    // https://www.npmjs.com/package/js-base64
    var base64EncodedEmail = Base64.encodeURI(email);
    var request = gmail.users.messages.send({
      'userId': userId,
      'resource': {
        'raw': base64EncodedEmail
      }
    });
    request.execute(callback);
  }

  module.exports = { sendMessage };