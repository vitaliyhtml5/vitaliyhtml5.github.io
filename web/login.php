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
				<p class="header-text">Для входа в аккаунт введите email и пароль<br>После этого нажмите на кнопку "Войти"</p>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<div class="content login-content">
						<h2 class="main-title">Вход в аккаунт</h2>
						<p class="login-content__text">У Вас ещё нет аккаунта? <a href="signup.php" class="login-content__signup">Зарегистрироваться</a></p>
						<!-- <span class="signup-tooltip-info"></span> -->
<?php
if (isset($_POST['login_btn'])) {
	$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');
	$web_url = 'web-main.php';

	$email = mysqli_real_escape_string($dbc, trim($_POST['login_email']));
	$password = mysqli_real_escape_string($dbc, trim($_POST['login_password']));
	$email_correct = 'false';
	$password_correct = 'false';

	$query_login_email = "SELECT email FROM users WHERE email = '$email'";
	$result_login_email = mysqli_query($dbc, $query_login_email) or die ('Error in query');

	while ($row_login_email = mysqli_fetch_array($result_login_email)) {
		if ($row_login_email[0] == $email) $email_correct = 'true';
		else $email_correct = 'false';
	}

	$query_login_pwd = "SELECT id, email, password FROM users WHERE email = '$email' AND password = SHA('$password')";
	$result_login_pwd = mysqli_query($dbc, $query_login_pwd) or die ('Error in query');

	if (mysqli_num_rows($result_login_pwd) == 1) $password_correct = 'true';
	else $password_correct = 'false';

	if ($email_correct == 'true' && $password_correct == 'true') {
		while($row_login_id = mysqli_fetch_array($result_login_pwd)) {
			$user_id = $row_login_id[0];
		}
		
		if ($_POST['login_remember'] == 'remember') {
			$token =  substr(md5(rand(1,9999).microtime()), 0, 40);
			$query_token = "UPDATE token_web SET token = '$token' WHERE id_users = '$user_id'";
			$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
			setcookie('user_id_web', $user_id, time() + (60 * 60 * 24 * 364));
			setcookie('token_web', $token, time() + (60 * 60 * 24 * 364));
		}
		else {
			session_start();
			$token =  substr(md5(rand(1,9999).microtime()), 0, 40);

			$query_token = "UPDATE token_web SET token = '$token' WHERE id_users = '$user_id'";
			$result_token = mysqli_query($dbc, $query_token) or die('can\'t send token to Data base');
			
			$_SESSION['user_id_web'] = $user_id;
			$_SESSION['token_web'] = $token;
		}

		header('Location: ' .$web_url);
		mysqli_close($dbc);
	}
}
?>
						<form class="login-form" method="POST" action="<?php echo $_SERVER['PHP_SELF'].'?entity:401' ?>">
							<label class="login__data" for="login__email">Email:</label>
							<input class="login-input" id="login__email" type="text" name="login_email" maxlength="45" value="<?php if(!empty($email)) echo $email; ?>">
							<?php if(empty($email)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<?php if(!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) echo '<span class="error-message">Ошибка в email</span>' ?>
							<?php if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && $email_correct == 'false') echo '<span class="error-message">Этот email не зарегистрирован</span>' ?>
							<label class="login__data" for="login__password">Пароль:</label>
							<input class="login-input" id="login__password" type="password" name="login_password" maxlength="8" value="">
							<?php if(empty($password)) echo '<span class="error-message">Поле не может быть пустым</span>' ?>
							<?php if(!empty($password) && $password_correct == 'false') echo '<span class="error-message">Неверный пароль</span>' ?>
							<label class="login-remember-data">
								<input class="signup__remember" type="checkbox" name="login_remember" value="remember" checked>
								<span class="signup-remember_sign"></span>
								<span class="signup-remember-text">Запомнить меня</span>
								<a class="login-restore-link" href="#">Забыли пароль?</a>
							</label>
							<button class="login-form__btn" type="submit" name="login_btn">Войти</button>
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
	<script src="login/login.js"></script>
</body>
</html>

