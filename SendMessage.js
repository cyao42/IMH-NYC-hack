

class SendMessage 
{ 
	var fromNumber = "phone-number";
	var toNumber = "phone-number2";

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

}

