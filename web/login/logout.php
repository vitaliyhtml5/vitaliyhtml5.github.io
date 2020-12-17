<?php

$web_url = '../web.php';

if(isset($_COOKIE['user_id_web']) || isset($_COOKIE['token_web'])) {
	setcookie( "token_web", "", time()- 60, "/web","", 0);
	setcookie( "user_id_web", "", time()- 60, "/web","", 0);
	header('Location: ' .$web_url);
}
else {
	session_start();
	$_SESSION = array();
	session_destroy();
	header('Location: ' .$web_url);
}

?>
