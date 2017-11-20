<?php
use Stripe\Stripe;
use Stripe\Charge;
require('vendor/autoload.php');

\Stripe\Stripe::setApiKey('sk_test_HyTMEfTEGujZVpykbHYtbJJX');

$tk = $_POST["tk"];


try{

	\Stripe\Charge::create(array(
		"amount" => 40 * 100,
		"currency" => "usd",
		"source" => $tk,
		"description" => "store payment"

		));

}catch(\Exception $e){
	echo $e->getMessage();

	return;

}

echo "sucess payment processed";



?>

