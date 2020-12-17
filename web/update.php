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
<?php
// error_reporting(0);
$dbc = mysqli_connect('localhost','root','','web') or die('Error with con to Database');
session_start();

if (isset($_COOKIE['user_id_web']) && isset($_COOKIE['token_web'])) {
	$user_id_web = $_COOKIE['user_id_web'];
	$token_web = $_COOKIE['token_web'];
}	
else {
	$user_id_web = $_SESSION['user_id_web'];
	$token_web = $_SESSION['token_web'];
}

$query = "SELECT u.id, u.first_name,u.last_name,u.email,t.token FROM users u JOIN token_web t ON u.id=t.id_users WHERE u.id = '$user_id_web'";
$data = mysqli_query($dbc,$query) or die('can\t get data drom data base');


while($row_data = mysqli_fetch_array($data)) {
	if($user_id_web == $row_data[0] && $token_web == $row_data[4]) {
		$id =  $row_data[0];
		$first_name =  $row_data[1];
		$last_name =  $row_data[2];
		$email =  $row_data[3];
		$token =  $row_data[4];
	}
	else {
		$first_name =  '';
		$last_name =  '';
		$email =  '';
	}
	
}
$error_profile = 'false';        //может удалить
if(isset($_POST['update_profile_btn'])) {
	if(!empty($_POST['update_first_name']) && $user_id_web == $id && $token_web == $token) {
		$first_name = $_POST['update_first_name'];
		$last_name = $_POST['update_last_name'];
		$query_profile = "UPDATE users SET first_name='$first_name', last_name='$last_name' WHERE id='$user_id_web'";
		$data_profile = mysqli_query($dbc,$query_profile) or die('can\t send data-profile to data base');
		?>
		<div class="flesh-profile">Данные профиля были изменены</div>
		<?php		
	}
	else {
		?>
		<div class="flesh-profile" style="color: red;">Данные профиля не были изменены</div>
		<?php
	}
}

$email_unique = 'true';  //может удалить
if(isset($_POST['update_email_btn'])) {
	$query_email = "SELECT email FROM users";
	$result_email = mysqli_query($dbc, $query_email) or die ('Error in query');


	while($row_email = mysqli_fetch_array($result_email)) {
		if ($_POST['update_email'] == $row_email[0]) {
			$email_unique = 'false';
			break 1;
		}	
		else $email_unique = 'true';
	}

	$email_password = $_POST['update_email_password'];
	$query_email_pwd = "SELECT password FROM users WHERE id = '$user_id_web' AND password = SHA('$email_password')";
	$result_email_pwd = mysqli_query($dbc, $query_email_pwd) or die ('Error in query');

	if (mysqli_num_rows($result_email_pwd) == 1) $password_correct = 'true';	
	else $password_correct = 'false';

	if(!empty($_POST['update_email']) && filter_var($_POST['update_email'], FILTER_VALIDATE_EMAIL) && $email_unique == 'true' && $password_correct == 'true' && $user_id_web == $id && $token_web == $token) {
		$email = $_POST['update_email'];
		$query_email_new = "UPDATE users SET email='$email' WHERE id='$user_id_web'";
		$data_email_new = mysqli_query($dbc,$query_email_new) or die('can\t send data-email to data base');
		?>
		<div class="flesh-profile">Email был изменён</div>
		<?php
	}
	else {
		?>
		<div class="flesh-profile" style="color: red;">Email не был изменён</div>
		<?php
	}	
}

$password_update_correct = 'true';  //может удалить
if(isset($_POST['update_password_btn'])) {
	$update_password = $_POST['update_old_password'];
	$query_update_pwd = "SELECT password FROM users WHERE id = '$user_id_web' AND password = SHA('$update_password')";
	$result_update_pwd = mysqli_query($dbc, $query_update_pwd) or die ('Error in query');

	if (mysqli_num_rows($result_update_pwd) == 1) $password_update_correct = 'true';		
	else $password_update_correct = 'false';

	if(!empty($_POST['update_old_password']) && !empty($_POST['update_new_password']) && $password_update_correct == 'true' && $user_id_web == $id && $token_web == $token) {
		$password_new = $_POST['update_new_password'];
		$query_update_pwd_new = "UPDATE users SET password=SHA('$password_new') WHERE id='$user_id_web'";
		$data_update_pwd_new = mysqli_query($dbc,$query_update_pwd_new) or die('can\t send data-password to data base');
		?>
		<div class="flesh-profile">Пароль был изменён</div>
		<?php
	}
	else {
		?>
		<div class="flesh-profile" style="color: red;">Пароль не был изменён</div>
		<?php
	}
}	

mysqli_close($dbc);
?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<a class="signup-header-link" href="web.php" class="button">Главная</a>
				<a href="web.php" class="header-logo">
					<img class="header-logo__img" src="img/html-logo.svg" alt="Лого html">
					<img class="header-logo__img" src="img/css-logo.svg" alt="Лого css">
					<h1 class="header-logo__title"><span class="hidden">HTML и CSS</span>Tutorial</h1>
				</a>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<div class="content">
						<h2 class="update-title">Данные профиля</h2>
						<form class="update-form" method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>">
							<label>Имя</label>
							<input class="update__input update__firstname" type="text" name="update_first_name" value="<?php echo $first_name ?>" maxlength="20">
							<span class="error-message"></span>
							<label>Фамилия</label><br>
							<input class="update__lastname" type="text" name="update_last_name" value="<?php echo $last_name ?>" maxlength="20">
							<button class="update-form__btn" type="submit" name="update_profile_btn">Изменить</button>
						</form>
						<hr class="update-hr">
						<h2 class="update-title">Смена email</h2>
						<form class="update-form" method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>">
							<label>Введите новый email</label>
							<input class="shit update__input update__email" type="text" name="update_email" value="<?php echo $email ?>" maxlength="45">
							<?php if(!empty($_POST['update_email']) && !filter_var($_POST['update_email'], FILTER_VALIDATE_EMAIL)) echo '<span class="error-message">Email был введён с ошибкой</span>' ?>
							<?php if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && $email_unique == 'false') echo '<span class="error-message">Этот email уже занят</span>' ?>
							<label>Текущий пароль</label>
							<input class="update__input update__email-password" type="password" name="update_email_password" maxlength="8">
							<?php if(!empty($_POST['update_email_password']) && $password_correct == 'false') echo '<span class="error-message">Неверный пароль</span>' ?>
							<span class="error-message"></span>
							<button class="update-form__btn" type="submit" name="update_email_btn">Изменить</button>
						</form>
						<hr class="update-hr">
						<h2 class="update-title update-pwd">Смена пароля</h2>
						<form class="update-form" method="POST" action="<?php echo $_SERVER['PHP_SELF'] ?>">
							<label>Текущий пароль</label>
							<input class="update__input update-oldpassword" type="password" name="update_old_password" maxlength="8">
							<?php if(!empty($_POST['update_old_password']) && $password_update_correct == 'false') echo '<span class="error-message">Неверный пароль</span>' ?>
							<span class="error-message"></span>
							<label>Новый пароль</label>
							<input class="update__input update__newpassword" type="password" name="update_new_password" maxlength="8">
							<span class="error-message"></span>
							<button class="update-form__btn" type="submit" name="update_password_btn">Изменить</button>
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
	<script src="login/update.js"></script>
</body>
</html>

