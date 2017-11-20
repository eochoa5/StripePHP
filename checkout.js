Stripe.setPublishableKey('pk_test_rao4xePPXbsdDTcqm7eexCmH');

function processPayment(){
	Stripe.card.createToken({
		number: "4242424242424242",
		cvc: "444",
		exp_month: "12",
		exp_year: "2018",
		name: "Goku Vegeta"

	}, stripeResponseHandler);

}

function stripeResponseHandler(status, response){
	if(response.error){
		alert(response.error.message);

	}
	else{
		var token = response.id;
		ajaxCall(token);
	}

}


function ajaxCall(param){
	var em = "ed@lol.com";
	var pass = "lol";

	var req = new XMLHttpRequest();
    req.open("POST", "process.php", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
	    if(req.readyState == 4 && req.status == 200) {
			alert(req.responseText);
	    }
    }
	
    req.send("email="+em+"&tk="+param); 
}