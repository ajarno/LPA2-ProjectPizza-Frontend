const request = require('request');
const querystring = require('querystring');

exports.handler = function(event, context, callback) {
  console.log('Received event:', JSON.stringify(event, null, 2));

  callback(null, {
  statusCode: 200,
  body: "Hello, World ca marche"
  });

   //Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
   var body = 'cmd=_notify-validate&' + event.body;

   console.log('Verifying');
   console.log(body);
   console.log(JSON.stringify(querystring.parse(body), null, 2))

   var options = {
       url: 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr',
       method: 'POST',
       headers: {
           'Connection': 'close'
       },
       body: body,
       strictSSL: true,
       rejectUnauthorized: false,
       requestCert: true,
       agent: false
   };

   //POST IPN data back to PayPal to validate
   request(options, function callback(error, response, body) {
       if (!error && response.statusCode === 200) {

           //Inspect IPN validation result and act accordingly
           if (body.substring(0, 8) === 'VERIFIED') {

               //The IPN is verified
               console.log('Verified IPN!');

           } else if (body.substring(0, 7) === 'INVALID') {

               //The IPN invalid
               console.log('Invalid IPN!');
           } else {
               //Unexpected response body
               console.log('Unexpected response body!');
               console.log(body);
           }
       }else{
           //Unexpected response
           console.log('Unexpected response!');
           console.log(response);
       }

   });
}