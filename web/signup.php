<!DOCTYPE html>
<html lang="ru">
<head>
	<title>HTML/CSS tutorial</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<a class="signup-header-link" href="web.php" class="button">Главная</a>
				<a href="web.php" class="header-logo">
					<img class="header-logo__img" src="img/html-logo.svg" alt="Лого html">
					<img class="header-logo__img" src="img/css-logo.svg" alt="Лого css">
					<h1 class="header-logo__title"><span class="hidden">HTML и CSS</span>Tutorial</h1>
				</a>
				<p class="header-text">Для регистрации на сайте заполните обязательные поля формы<br>После этого нажмите на кнопку "Зарегистрироваться"</p>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<div class="content signup-content">
						<h2 class="main-title">Регистрация</h2>
						<p class="login-content__text">Уже есть аккаунт? <a href="login.php" class="login-content__signup">Войти</a></p>
						<!-- <span class="signup-tooltip-info"></span> -->
<?php
if (isset($_POST['signup_btn'])) {
	$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');
	$web_url = 'web-main.php';

	$first_name = mysqli_real_escape_string($dbc, trim($_POST['signup_name']));
	$last_name = mysqli_real_escape_string($dbc, trim($_POST['signup_lastname']));
	$email = mysqli_real_escape_string($dbc, trim($_POST['signup_email']));
	$password = mysqli_real_escape_string($dbc, trim($_POST['signup_password']));
	$password_confirm = mysqli_real_escape_string($dbc, trim($_POST['signup_confirm']));
	$signup_key = mysqli_real_escape_string($dbc, trim($_POST['signup_key']));

	$query_key = "SELECT * FROM key_web";
	$result_key = mysqli_query($dbc, $query_key) or die ('Error in query');

	while($row_key = mysqli_fetch_array($result_key)) {
		$key_value = $row_key[1];
	}

	$query_email = "SELECT email FROM users";
	$result_email = mysqli_query($dbc, $query_email) or die ('Error in query');

	while($row_email = mysqli_fetch_array($result_email)) {
		if ($email == $row_email[0]) {
			$email_unique = 'false';
			break 1;
		}
		else $email_unique = 'true';
	}

	if ($email_unique == 'true' && $password === $password_confirm && $signup_key == $key_value && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($first_name) && !empty($email) && !empty($password) && !empty($password_confirm) && !empty($signup_key)) {

		$query = "INSERT INTO users(first_name,last_name,email,password) VALUES ('$first_name','$last_name','$email', SHA('$password'))";
		$result = mysqli_query($dbc, $query) or die('can\'t send data to Data base');

		$query_id = "SELECT * FROM users";
		$result_id = mysqli_query($dbc, $query_id) or die ('Error in query');

		while($row_id = mysqli_fetch_array($result_id)) {
			$user_id = $row_id[0];
		}

		if ($_POST['signup_remember'] == 'remember') {
			$token =  substr(md5(rand(1,9999).microtime()), 0, 40);

			$query_token = "INSERT INTO token_web(token,id_users) VALUES ('$token','$user_id')";
			$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');

			setcookie('user_id_web', $user_id, time() + (60 * 60 * 24 * 364));
			setcookie('token_web', $token, time() + (60 * 60 * 24 * 364));
		}
		else {
			session_start();
			$token =  substr(md5(rand(1,9999).microtime()), 0, 40);

			$query_token = "INSERT INTO token_web(token,id_users) VALUES ('$token','$user_id')";
			$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
			
			$_SESSION['user_id_web'] = $user_id;
			$_SESSION['token_web'] = $token;
		}

		header('Location: ' .$web_url);
		mysqli_close($dbc);
	}
	else mysqli_close($dbc);
}
?>
						<form class="signup-form" method="POST" action="<?php echo $_SERVER['PHP_SELF'].'?entity:422' ?>">
							<label class="signup__data" for="signup__name">Имя:<sup>*</sup></label>
							<input class="signup-necessary-input" id="signup__name" type="text" name="signup_name" autofocus maxlength="20" value="<?php if(!empty($first_name)) echo $first_name; ?>">
							<?php if(empty($first_name)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<label class="signup__data" for="signup__lastname">Фамилия:</label>
							<input id="signup__lastname" type="text" name="signup_lastname" maxlength="20" value="<?php if(!empty($last_name)) echo $last_name; ?>">
							<label class="signup__data" for="signup__email">Email:<sup>*</sup></label>
							<input class="signup-necessary-input" id="signup__email" type="text" name="signup_email" maxlength="45" value="<?php if(!empty($email)) echo $email; ?>">
							<?php if(empty($email)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<?php if(!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) echo '<span class="error-message">Ошибка в email</span>' ?>
							<?php if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && $email_unique == 'false') echo '<span class="error-message">Этот email уже занят</span>' ?>
							<label class="signup__data" for="signup__password">Пароль:<sup>*</sup></label>
							<input class="signup-necessary-input" id="signup__password" type="password" name="signup_password" maxlength="8" value="">
							<?php if(empty($password)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<label class="signup__data" for="signup__confirm">Повторите пароль:<sup>*</sup></label>
							<input class="signup-necessary-input" id="signup__confirm" type="password" name="signup_confirm" maxlength="8" value="">
							<?php if(empty($password_confirm)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<?php if(!empty($password) &&  !empty($password_confirm) && $password !== $password_confirm) echo '<span class="error-message">Пароли не совпали</span>' ?>
							<label class="signup__data" for="signup__key">Код регистрации:<sup>*</sup></label>
							<input class="signup-necessary-input" id="signup__key" type="text" name="signup_key" value="<?php if(!empty($signup_key)) echo $signup_key; ?>">
							<?php if(empty($signup_key)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<?php if(!empty($signup_key) && $signup_key != $key_value) echo '<span class="error-message">Код регистрации неверный</span>' ?>
							<p class="signup-necessary"><sup>*</sup>Обязательные поля</p>
							<label class="signup-remember-data">
								<input class="signup__remember" type="checkbox" name="signup_remember" value="remember" checked>
								<span class="signup-remember_sign"></span>
								<span class="signup-remember-text">Запомнить меня</span>
							</label>
							<button class="signup-form__btn" type="submit" name="signup_btn">Зарегистрироваться</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="footer">
			<div class="container">
				<p class="footer__text">Данный Tutorial создан исключительно в образовательных целях<br>Вопросы и предложения по его работе можно отправить на e-mail: <span class="footer__text_email">vitaliyhtml5@gmail.com</span></p>
			</div>
		</div>
	</footer>
	<script src="login/signup.js"></script>
</body>
</html>

