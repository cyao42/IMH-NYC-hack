// Twilio Credentials 
var accountSid = 'ACef13b169a9f523504a5809383d9d4f9e'; 
var authToken = '074c017d6c167cba1f6d2619d4fe32d7'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 


var function send(toNumber, fromNumber, msg) 
{
	client.messages.create({ 
	    to: toNumber, 
	    from: fromNumber, 
	    body: msg, 
	}, function(err, message) { 
	    console.log(message.sid); 
	}); 	
} 
