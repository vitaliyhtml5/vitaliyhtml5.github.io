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
		$web_main_url = 'web-main.php';
		
		$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');

		if(isset($_COOKIE['user_id_web']) && isset($_COOKIE['token_web'])) {

			$user_id_web = $_COOKIE['user_id_web'];
			$query_web = "SELECT u.id, t.token FROM users u JOIN token_web t ON u.id = t.id_users WHERE u.id = $user_id_web";
			$result_web = mysqli_query($dbc, $query_web) or die ('Error in query');

			while($row_token = mysqli_fetch_array($result_web)) {
				if($row_token[0] == $_COOKIE['user_id_web'] && $row_token[1] == $_COOKIE['token_web']) header('Location: ' .$web_main_url);
			}
		}
		mysqli_close($dbc);
	?>
	<header id="header-main">
		<div class="header">
			<div class="container">
				<div class="login-wrap">
					<a href="signup.php" class="signup__btn">Регистрация</a>
					<a href="login.php" class="login__btn">Вход</a>
				</div>
				<div class="header-logo">
					<img class="header-logo__img" src="img/html-logo.svg" alt="Лого html">
					<img class="header-logo__img" src="img/css-logo.svg" alt="Лого css">
					<h1 class="header-logo__title"><span class="hidden">HTML и CSS</span>Tutorial</h1>
					<button class="hamburger hamburger-open"><span class="hamburger-open_border"></span></button>
					<button class="hamburger hamburger-close"><span class="hamburger-close_border"></span></button>
				</div>
				<p class="header-text">Данный сайт содержит основные элементы <span class="code-item_orange">HTML</span> и стили <span class="code-item_orange">CSS</span>.<br>Если ваш сайт не отображается должным образом, всегда можно сравнить ваш код с примерами ниже</p>
				<nav class="sidebar">
					<ul class="sidebar__list">
						<li class="sidebar__item sidebar__item_selected">HTML</li>
						<li class="sidebar__item section-hidden">CSS</li>
						<li class="sidebar__item" hidden>Advanced CSS</li>
						<li class="sidebar__item section-hidden">Материалы</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<main>
		<div class="main">
			<div class="container">
				<div class="main-wrap">
					<aside class="tutorial">
						<h2 class="tutorial__title">Быстрый переход</h2>
						<div class="tutorial-section">
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#html-link_first" class="tutorial__link">Заголовок</a></li>
								<li class="tutorial__item"><a href="#html-link_second" class="tutorial__link">Параграф</a></li>
								<li class="tutorial__item"><a href="#html-link_third" class="tutorial__link">Список</a></li>
								<li class="tutorial__item"><a href="#html-link_fourth" class="tutorial__link">Изображение</a></li>
								<li class="tutorial__item"><a href="#html-link_fifth" class="tutorial__link">Ссылки</a></li>
								<li class="tutorial__item"><a href="#html-link_sixth" class="tutorial__link">Таблица</a></li>
								<li class="tutorial__item"><a href="#html-link_seventh" class="tutorial__link">Форма</a></li>
								<li class="tutorial__item"><a href="#html-link_eighth" class="tutorial__link">label</a></li>
							</ul>
						</div>
						<div class="tutorial-section" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#css-link_first" class="tutorial__link">Подключение CSS</a></li>
								<li class="tutorial__item"><a href="#css-link_second" class="tutorial__link">Ширина и высота</a></li>
								<li class="tutorial__item"><a href="#css-link_third" class="tutorial__link">Семейство шрифтов</a></li>
								<li class="tutorial__item"><a href="#css-link_fourth" class="tutorial__link">Размер шрифта</a></li>
								<li class="tutorial__item"><a href="#css-link_fifth" class="tutorial__link">Другие свойства шрифта</a></li>
								<li class="tutorial__item"><a href="#css-link_sixth" class="tutorial__link">Цвет</a></li>
								<li class="tutorial__item"><a href="#css-link_seventh" class="tutorial__link">div и span</a></li>
								<li class="tutorial__item"><a href="#css-link_eighth" class="tutorial__link">Граница</a></li>
								<li class="tutorial__item"><a href="#css-link_nineth" class="tutorial__link">Внутренний и внешний отступ</a></li>
								<li class="tutorial__item"><a href="#css-link_tenth" class="tutorial__link">Выравнивание текста</a></li>
								<li class="tutorial__item"><a href="#css-link_eleventh" class="tutorial__link">Классы и идентификаторы</a></li>
							</ul>
						</div>
						<div class="tutorial-section" hidden></div>
						<div class="tutorial-section" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#files-link_first" class="tutorial__link">HTML-код базовый</a></li>
								<li class="tutorial__item"><a href="#files-link_second" class="tutorial__link">HTML-код:  таблица+форма</a></li>
								<li class="tutorial__item"><a href="#files-link_third" class="tutorial__link">HTML и CSS</a></li>
								<li class="tutorial__item"><a href="#files-link_fifth" class="tutorial__link">Домашнее задание - 1</a></li>
								<li class="tutorial__item"><a href="#files-link_sixth" class="tutorial__link">Домашнее задание - 2</a></li>	
								<li class="tutorial__item"><a href="#files-link_eleventh" class="tutorial__link">Видео</a></li>
							</ul>
						</div>
						<a href="#header-main" class="btnup btnup-create"></a>
					</aside>
					<div class="content">
						<a href="#header-main" class="btnup btnup-smdev btnup-create"></a>
						<section id="html-table" class="section-tab">
							<div class="html-tab">
								<h2 class="main-title">Основные html элементы</h2>
								<h3 class="main-subtitle" id="html-link_first">Заголовок</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;h1&gt;<span class="code_grey">Купи слона</span>&lt;/h1&gt;<br>&lt;h2&gt;<span class="code_grey">Купи слона</span>&lt;/h2&gt;<br>&lt;h3&gt;<span class="code_grey">Купи слона</span>&lt;/h3&gt;<br>&lt;h4&gt;<span class="code_grey">Купи слона</span>&lt;/h4&gt;<br>&lt;h5&gt;<span class="code_grey">Купи слона</span>&lt;/h5&gt;<br>&lt;h6&gt;<span class="code_grey">Купи слона</span>&lt;/h6&gt;</code>
										<p class="code-comment">Существует 6 уровней заголовков, где <span class="code">h1</span> - имеет наибольшую важность, а <span class="code">h6</span> - наименьшую.</p>
									</div>
									<div class="query__example">
										<span class="query__example_h1">Купи слона</span>
										<h2>Купи слона</h2>
										<h3>Купи слона</h3>
										<h4>Купи слона</h4>
										<h5>Купи слона</h5>
										<h6>Купи слона</h6>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_second">Параграф</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;p&gt;<span class="code_grey">Слоны - самые гигантские сухопутные животные на Земле. Средняя масса их достигает пяти тонн, а длина туловища — 6-7 метров.</span>&lt;/p&gt;<br>&lt;p&gt;<span class="code_grey">Слоны обычно общаются при помощи инфразвука, поэтому долгое время слоновий язык оставался неразгаданным.</span>&lt;/p&gt;</code>
										<p class="code-comment">При отображении <span class="code">p</span>, браузер автоматически добавляет до и после него отступы, отделяя его от других элементов. Используется для больших блоков текста.</p>
									</div>
									<div class="query__example">
										<p class="code_grey">Слоны - самые гигантские сухопутные животные на Земле. Средняя масса их достигает пяти тонн, а длина туловища — 6-7 метров.</p>
										<p class="code_grey">Слоны обычно общаются при помощи инфразвука, поэтому долгое время слоновий язык оставался неразгаданным.</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_third">Список</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;ul&gt;<br>&emsp;&lt;li&gt;<span class="code_grey">Эмоциональная поддержка</span>&lt;/li&gt;<br>&emsp;&lt;li&gt;<span class="code_grey">Физическая помощь</span>&lt;/li&gt;<br>&emsp;&lt;li&gt;<span class="code_grey">Престижно</span>&lt;/li&gt;<br>&lt;/ul&gt;</code>
										<span class="code-comment">Наиболее популярны следующие виды списков:</span>
										<ul class="code-list">
											<li><span class="code-comment_grey">Маркированный - используется контейнер </span><span class="code">ul</span></li>
											<li><span class="code-comment_grey">Нумерованный - используется контейнер </span><span class="code">ol</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<ul>
											<li>Эмоциональная поддержка</li>
											<li>Физическая помощь</li>
											<li>Престижно</li>
										</ul>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_fourth">Изображение</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;img src="monkey.png"  alt="The chimpanzee"&gt;</code>
										<span class="code-comment">Обязательны следующие атрибуты:</span>
										<ul class="code-list">
											<li><span class="code">src - </span><span class="code-comment_grey">путь к изображению. Если картинка находится в одной папке с index.html, прописывается только ее название с расширением.</span></li>
											<li><span class="code">alt - </span><span class="code-comment_grey">позволяет получить текстовую информацию о рисунке при отсутствии загрузки изображения.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<img src="img/monkey.png" alt="Monkey is on the tree">
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_fifth">Ссылки</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;a href="https://ru.wikipedia.org/"&gt;<span class="code_grey">Статья в Википедии</span>&lt;/a&gt;</code>
										<span class="code-comment">Атрибуты:</span>
										<ul class="code-list">
											<li><span class="code">href - </span><span class="code-comment_grey">адрес, на который следует перейти.</span></li>
											<li><span class="code">target="_blank" - </span><span class="code-comment_grey">загружает страницу в новой вкладке браузера.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<a href="https://ru.wikipedia.org/">Статья в Википедии</a>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_sixth">Таблица</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;table&gt;<br>&emsp;&lt;tr&gt;<br>&emsp;&emsp;&lt;th&gt;<span class="code_grey">Вид</span>&lt;/th&gt;<br>&emsp;&emsp;&lt;th&gt;<span class="code_grey">Вес</span>&lt;/th&gt;<br>&emsp;&lt;/tr&gt;<br>&emsp;&lt;tr&gt;<br>&emsp;&emsp;&lt;td&gt;<span class="code_grey">Африканский слон</span>&lt;/td&gt;<br>&emsp;&emsp;&lt;td&gt;<span class="code_grey">6000 кг</span>&lt;/td&gt;<br>&emsp;&lt;/tr&gt;<br>&emsp;&lt;tr&gt;<br>&emsp;&emsp;&lt;td&gt;<span class="code_grey">Индийский слон</span>&lt;/td&gt;<br>&emsp;&emsp;&lt;td&gt;<span class="code_grey">5000 кг</span>&lt;/td&gt;<br>&emsp;&lt;/tr&gt;<br>&lt;/table&gt;</code>
										<span class="code-comment">Элементы таблицы:</span>
										<ul class="code-list">
											<li><span class="code">table - </span><span class="code-comment_grey">контейнер для элементов таблицы.</span></li>
											<li><span class="code">tr - </span><span class="code-comment_grey">отображает строки таблицы.</span></li>
											<li><span class="code">td - </span><span class="code-comment_grey">ячейка таблицы для внесения данных.</span></li>
											<li><span class="code">th - </span><span class="code-comment_grey">тот же td, используется для "шапки" таблицы.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<table>
											<tr>
												<th>Вид</th>
												<th>Вес</th>
											</tr>	
											<tr>
												<td>Африканский слон</td>
												<td>6000 кг</td>
											</tr>
											<tr>
												<td>Индийский слон</td>
												<td>5000 кг</td>
											</tr>
										</table>
										<p class="code-comment">* чтобы у таблицы появилась граница, нужно в сss для th и td добавить:  border: 1px solid black;</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_seventh">Форма</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;form method="POST" action="file.php"&gt;<br>&emsp;&lt;input type="text" name="login"&gt;<br>&emsp;&lt;input type="password" name="password"&gt;<br>&emsp;&lt;textarea placeholder="Your comment"&gt;&lt;/textarea&gt;<br>&emsp;&lt;input type="submit" value="Send"&gt;<br>&lt;/form&gt;</code>
										<span class="code-comment">Элементы и атрибуты формы:</span>
										<ul class="code-list">
											<li><span class="code">form - </span><span class="code-comment_grey">контейнер для элементов формы. Как правило, содержит два атрибута:</span>
												<ul class="code__sublist">
													<li class="code_circle"><span class="code">method - </span><span class="code-comment_grey">метод запроса. Например, post или get.</span></li>
													<li class="code_circle"><span class="code">action - </span><span class="code-comment_grey">адрес на обработку формы.</span></li>	
												</ul>
											</li>
											<li><span class="code">input - </span><span class="code-comment_grey">ключевой элемент формы. Меняет свой вид благодаря атрибуту type: </span>
												<ul class="code__sublist">
													<li class="code_circle"><span class="code">text - </span><span class="code-comment_grey"> определяет однострочное текстовое поле.</span></li>
													<li class="code_circle"><span class="code">password - </span><span class="code-comment_grey">определяет поле для ввода пароля (замаскированные символы).</span></li>
													<li class="code_circle"><span class="code">radio - </span><span class="code-comment_grey">переключатели для выбора одного варианта.</span></li>
													<li class="code_circle"><span class="code">checkbox - </span><span class="code-comment_grey">флажки, которые могут быть либо установлены, либо сняты.</span></li>
													<li class="code_circle"><span class="code">submit - </span><span class="code-comment_grey">кнопка для отправки формы.</span></li>	
												</ul>
											</li>
											<li><span class="code">textarea - </span><span class="code-comment_grey">определяет многострочное текстовое поле.</span>
											<li><span class="code">placeholder - </span><span class="code-comment_grey"> подсказка для ввода значений.</span>
										</ul>	
									</div>
									<div class="query__example">
										<form method="POST" action="file.php">
											<input type="text" name="login">
											<input type="password" name="password">
											<textarea placeholder="Your comment"></textarea>
											<input type="submit" value="Send">
										</form>
										<p class="code-comment">* чтобы каждая группа формы начиналась с новой строки c отступом, нужно в сss для input и textarea добавить:  display: block; margin-bottom: 10px; </p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="html-link_eighth">Label</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;label&gt;<br>&emsp;&lt;input type="checkbox" name="tea" value="green"&gt;<br>&emsp;&lt;span&gt;<span class="code_grey">Зелёный чай</span>&lt;/span&gt;<br>&lt;/label&gt;</code>
										<p class="code-comment">Элемент <span class="code">label</span> позволяет связать <span class="code">input</span> с текстом. Таким образом, можно кликнуть мышкой на текст и рядом стоящий чекбокс будет отмечен</p>
									</div>
									<div class="query__example">
										<label>
											<input type="checkbox" name="tea" value="green">
											<span>&emsp;Зелёный чай</span>
										</label>
									</div>
								</div>
							</div>
						</section>
						<section id="css-table" class="section-tab" hidden></section>
						<section class="section-tab" hidden></section>
						<section id="files-table" class="section-tab" hidden></section>
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
	<script src="extra-content.js"></script>
	<script src="script.js"></script>
</body>
</html>