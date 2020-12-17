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
session_start();
$web_url = 'web.php';

$dbc = mysqli_connect('localhost','root','','web') or die('No connection with Data base');

if(isset($_COOKIE['user_id_web']) && isset($_COOKIE['token_web'])) {

	$user_id_web = $_COOKIE['user_id_web'];
	$query_web = "SELECT u.id, t.token, u.first_name FROM users u JOIN token_web t ON u.id = t.id_users WHERE u.id = $user_id_web";
	$result_web = mysqli_query($dbc, $query_web) or die ('Error in query');

	while($row_token = mysqli_fetch_array($result_web)) {
		if($row_token[0] != $_COOKIE['user_id_web'] || $row_token[1] != $_COOKIE['token_web']) header('Location: ' .$web_url);
	}
}
if(!isset($_COOKIE['user_id_web']) && !isset($_COOKIE['token_web']) && !isset($_SESSION['user_id_web']) && !isset($_SESSION['token_web'])) header('Location: ' .$web_url);

mysqli_close($dbc);
?>
	<header id="header-main">
		<div class="header">
			<p style="position: absolute; right: 20px; z-index: 5;"></p>
			<a href="update.php">Update</a>
			<form method="POST" action="login/logout.php"><button style="position: absolute; right: 20px; top: 40px; z-index: 5;">Выход</button></form>
			<div class="container">
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
						<li class="sidebar__item">CSS</li>
						<li class="sidebar__item">Продвинутый CSS</li>
						<li class="sidebar__item">Материалы</li>
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
						<div class="tutorial-section" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#advanced-link_first" class="tutorial__link">Элементы HTML 5</a></li>
								<li class="tutorial__item"><a href="#advanced-link_second" class="tutorial__link">Flexbox</a></li>
								<li class="tutorial__item"><a href="#advanced-link_third" class="tutorial__link">Ссылка на элемент</a></li>
								<li class="tutorial__item"><a href="#advanced-link_fourth" class="tutorial__link">Фоновое изображение</a></li>
								<li class="tutorial__item"><a href="#advanced-link_fifth" class="tutorial__link">Тень</a></li>
								<li class="tutorial__item"><a href="#advanced-link_sixth" class="tutorial__link">Градиент</a></li>
								<li class="tutorial__item"><a href="#advanced-link_seventh" class="tutorial__link">Свойство display</a></li>
								<li class="tutorial__item"><a href="#advanced-link_eighth" class="tutorial__link">Выравнивание блока</a></li>
								<li class="tutorial__item"><a href="#advanced-link_nineth" class="tutorial__link">Позиционирование</a></li>
								<li class="tutorial__item"><a href="#advanced-link_tenth" class="tutorial__link">Псевдоклассы</a></li>
								<li class="tutorial__item"><a href="#advanced-link_eleventh" class="tutorial__link">Псевдоэлементы</a></li>
								<li class="tutorial__item"><a href="#advanced-link_twelfth" class="tutorial__link">Transition</a></li>	
								<li class="tutorial__item"><a href="#advanced-link_thirteenth" class="tutorial__link">Анимация</a></li>	
								<li class="tutorial__item"><a href="#advanced-link_fourteenth" class="tutorial__link">Медиа-запросы</a></li>	
							</ul>
						</div>
						<div class="tutorial-section" hidden>
							<ul class="tutorial__list">
								<li class="tutorial__item"><a href="#files-link_first" class="tutorial__link">HTML-код базовый</a></li>
								<li class="tutorial__item"><a href="#files-link_second" class="tutorial__link">HTML-код:  таблица+форма</a></li>
								<li class="tutorial__item"><a href="#files-link_third" class="tutorial__link">HTML и CSS</a></li>
								<!-- <li class="tutorial__item"><a href="#files-link_fourth" class="tutorial__link">Домашнее задание - 1</a></li> -->
								<li class="tutorial__item"><a href="#files-link_fifth" class="tutorial__link">Домашнее задание - 1</a></li>
								<li class="tutorial__item"><a href="#files-link_sixth" class="tutorial__link">Домашнее задание - 2</a></li>
								<li class="tutorial__item"><a href="#files-link_seventh" class="tutorial__link">Макеты</a></li>
								<li class="tutorial__item"><a href="#files-link_eighth" class="tutorial__link">Тесты</a></li>
								<li class="tutorial__item"><a href="#files-link_nineth" class="tutorial__link">Примеры готовых сайтов</a></li>
								<li class="tutorial__item"><a href="#files-link_tenth" class="tutorial__link">Поиск багов</a></li>	
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
						<section id="css-table" class="section-tab" hidden>
							<div class="css-table-tab">
								<h2 class="main-title">Основные свойства и значения CSS</h2>
								<h3 class="main-subtitle" id="css-link_first">Подключение внешнего файла CSS</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;link rel="stylesheet" href="style.css"&gt;</code>
										<p class="code-comment">Строку кода помещают в <span class="code">head</span></p>
										<p class="code-comment">Если файл со стилями находится в одной папке с index.html, прописывается только его название с расширением</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_second">Ширина и высота</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">img {<br>&emsp;width: 100px;<br>&emsp;height: 120px;<br>}</code>
										<ul>
											<li><span class="code">width - </span><span class="code-comment_grey">ширина элемента</span></li>
											<li><span class="code">height - </span><span class="code-comment_grey">высота элемента</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<img src="img/monkey.png" alt="Monkey is on the tree2">
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_third">Семейство шрифтов</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">p {<br>&emsp;font-family: Lora, "Times New Roman", serif;<br>}</code>
										<span class="code-comment">Стандартные семейства шрифтов:</span>
										<ul class="code-list">
											<li><span class="code">sans-serif - </span><span class="code-comment_grey">шрифты без засечек, с прямыми и чётко прописанными контурами (Arial, Verdana).</span></li>
											<li><span class="code">serif - </span><span class="code-comment_grey">шрифты с засечками (Times New Roman, Georgia).</span></li>
											<li><span class="code">monospace - </span><span class="code-comment_grey">моноширинные шрифты; ширина каждого символа в таком семействе одинакова (Courier).</span></li>
											<li><span class="code">cursive - </span><span class="code-comment_grey">курсивные шрифты; попытка повторить на компьютере рукописный текст (Comic Sans).</span></li>
											<li><span class="code">fantasy - </span><span class="code-comment_grey">декоративные шрифты.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<p class="query__example_serif">Чтобы долететь до Луны на самолете, потребуется около 20 дней. На автомобиле пришлось бы ехать около полугода, пешком - идти около 5 лет.</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_fourth">Размер шрифта</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">p {<br>&emsp;font-size: 18px;<br>}</code>
										<span class="code-comment">Популярные единицы измерения:</span>
										<ul class="code-list">
											<li><span class="code">px (пиксель) - </span><span class="code-comment_grey">точка равная одному физическому пикселю на экране.</span></li>
											<li><span class="code">em - </span><span class="code-comment_grey">задаёт размер относительно шрифта родителя.</span></li>
											<li><span class="code">rem - </span><span class="code-comment_grey">задаёт размер относительно шрифта <span class="code">html</span>, используется для удобства глобального масштабирования.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<p class="query__example_big">Это один маленький шаг для человека, но гигантский скачок для всего человечества</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_fifth">Дополнительные свойства шрифта</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">p {<br>&emsp;font-weight: 700;<br>&emsp;line-height: 30px;<br>}</code>
										<ul>
											<li><span class="code">font-weight - </span><span class="code-comment_grey">насыщенность (жирность) шрифта.</span></li>
											<li><span class="code">font-style - </span><span class="code-comment_grey">начертание шрифта (курсивное или наклонное).</span></li>
											<li><span class="code">line-height - </span><span class="code-comment_grey">межстрочный интервал.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<p class="query__example_bold">Полное солнечное затмение в Украине будет наблюдаться 20 апреля 2061 года</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_sixth">Цвет</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">ul {<br>&emsp;color: yellow;<br>&emsp;background-color: #1089f4;<br>}</code>
										<ul>
											<li><span class="code">color - </span><span class="code-comment_grey">устанавливает цвет текста.</span></li>
											<li><span class="code">background-color - </span><span class="code-comment_grey">определяет цвет фона элемента.</span></li>
										</ul>	
										<span class="code-comment">Способы добавления цвета:</span>
										<ul class="code-list">
											<li><span class="code">ключевые цвета - </span><span class="code-comment_grey">название цвета на английском языке (red, blue, green).</span></li>
											<li><span class="code">hex - </span><span class="code-comment_grey">шестнадцатеричный код цвета. Он представляет собой шесть символов, стоящих после символа # (#00ff33).</span></li>
											<li><span class="code">rgb - </span><span class="code-comment_grey">использует три числа, которые описывают относительное количество красного, зеленого и синего цветов. Они смешаны вместе для получения любого оттенка: rgb(204, 10, 155).</span></li>
											<li><span class="code">rgba - </span><span class="code-comment_grey">тот же rgb, только дополнительно устанавливается степень прозрачности: от 0 (полностью прозрачный) до 1 (полностью непрозрачный). Например, rgba(204, 10, 155, 0.5).</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<ul class="query__example_color">
											<li>Июнь</li>
											<li>Июль</li>
											<li>Август</li>
										</ul>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_seventh">div и span</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;div&gt;<br>&emsp;&lt;img src="muscle.svg" alt="Muscles of the arm"&gt;<br>&emsp;&lt;h3&gt;<span class="code_grey">Физическая</span> &lt;span&gt;<span class="code_grey">помощь</span>&lt;/span&gt;&lt;/h3&gt;<br>&lt;/div&gt;</code><br>
										<code class="code">div {<br>&emsp;background-color: #6ad58f;<br>}<br>span {<br>&emsp;color: red;<br>}</code>
										<ul>
											<li><span class="code">div - </span><span class="code-comment_grey">блочный элемент, который используется для группирования элементов в целях стилизации.</span></li>
											<li><span class="code">span - </span><span class="code-comment_grey">строчный элемент, предназначен для выделения отдельных строк, символов и других строчных элементов для дальнейшего изменения.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="query__example query__example_green">
											<img src="img/muscle.svg" alt="Физическая поддержка">
											<h3 class="query__example_bold">Физическая <span class="code-item_red">помощь</span></h3>
										</div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_eighth">Граница</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">p {<br>&emsp;border: 2px solid brown;<br>&emsp;border-radius: 10px;<br>}</code>
										<ul>
											<li><span class="code">border - </span><span class="code-comment_grey">позволяет одновременно установить толщину, стиль и цвет границы.</span></li>
											<li><span class="code">border-radius - </span><span class="code-comment_grey">устанавливает радиус скругления уголков рамки.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<p class="query__example_border">Олимп - потухший вулкан на Марсе, самая высокая гора в Солнечной системе (27км). Его невозможно увидеть полностью с поверхности планеты (дистанция, необходимая для обозрения вулкана, столь велика, что он будет скрыт из-за кривизны поверхности).</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_nineth">Внутренний и внешний отступ</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">p {<br>&emsp;margin-bottom: 40px;<br>&emsp;padding-left: 25px;<br>&emsp;border: 2px solid #6ebd89;<br>}</code>
										<ul>
											<li><span class="code">margin - </span><span class="code-comment_grey">внешний отступ, который отделяет один элемент от другого.</span></li>
											<li><span class="code">padding - </span><span class="code-comment_grey">внутренний отступ между содержимым (например, текст) и границей этого же элемента.</span></li>
										</ul>
										<p class="code-comment">* можно прописать свойство margin или padding для всех сторон элемента. Например, <code class="code">margin: 10px 0 20px 5px</code> - это короткая запись для:<br>
										<code class="code">margin-top: 10px;<br>margin-right: 0;<br>margin-bottom: 20px;<br>margin-left: 5px;</code></p>	
									</div>
									<div class="query__example">
										<p class="query__example_space">Гора Эверест - высочайшая вершина Земли (8848 метров над уровнем моря). С 2014 года каждый альпинист, поднимающийся на Эверест, по возвращении должен вынести со склона горы не менее 8 килограммов мусора.</p>
										<p class="query__example_space">Марианская впадина - океанический глубоководный жёлоб на западе Тихого океана, самый глубокий из известных на Земле - 11022 метра.</p>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_tenth">Выравнивание текста</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">h2 {<br>&emsp;border: 1px solid purple;<br>&emsp;text-align: center;<br>}</code>
										<p class="code-comment">Свойство <span class="code">text-align </span> выравнивает текст в блочных элементах</p>
										<span class="code-comment">Значения свойства text-align:</span>
										<ul class="code-list">
											<li><span class="code">left - </span><span class="code-comment_grey">выравнивание текста по левому краю.</span></li>
											<li><span class="code">right - </span><span class="code-comment_grey">выравнивание текста по правому краю.</span></li>
											<li><span class="code">center - </span><span class="code-comment_grey">выравнивание по центру.</span></li>
											<li><span class="code">justify - </span><span class="code-comment_grey">выравнивание по ширине.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<h2 class="query__example_align">Преимущества</h2>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="css-link_eleventh">Классы и идентификаторы</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;h1 id="header"&gt;<span class="code_grey">Купи слона</span>&lt;/h1&gt;<br>&lt;a class="link" href="https://ru.wikipedia.org/"&gt;<span class="code_grey">Статья в Википедии</span>&lt;/a&gt;</code><br>
										<code class="code">#header {<br>&emsp;font-weight: 700;<br>}<br>.link {<br>&emsp;font-style: oblique;<br>}</code>
										<ul>
											<li><span class="code">id - </span><span class="code-comment_grey">имя должно быть уникальным и не использоваться больше одного раза.</span></li>
											<li><span class="code">class - </span><span class="code-comment_grey">используется многократно для разных элементов.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<h3 class="query__example_bold">Купи слона</h3>
										<a class="query__example_oblique" href="https://ru.wikipedia.org/">Статья в Википедии</a>
									</div>
								</div>
							</div>
						</section>
						<section id="advanced-table" class="section-tab" hidden>
							<div class="advanced-tab">
								<h2 class="main-title">HTML и CSS высокого уровня</h2>
								<h3 class="main-subtitle" id="advanced-link_first">Элементы <span class="code-font">HTML 5</span></h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;nav&gt;<br>&emsp;&lt;ul&gt;<br>&emsp;&emsp;&lt;li&gt;<span class="code_grey">Главная</span>&lt;/li&gt;<br>&emsp;&emsp;&lt;li&gt;<span class="code_grey">О нас</span>&lt;/li&gt;<br>&emsp;&emsp;&lt;li&gt;<span class="code_grey">Контакты</span>&lt;/li&gt;<br>&emsp;&lt;/ul&gt;<br>&lt;/nav&gt;</code>
										<p class="code-comment">Данные элементы позволяют заменить <span class="code">div </span> для отдельных блоков, добавив смысловое значение</p>
										<ul class="code-list">
											<li><span class="code">header - </span><span class="code-comment_grey">«шапка» сайта или раздела.</span></li>
											<li><span class="code">nav - </span><span class="code-comment_grey">навигационное меню.</span></li>
											<li><span class="code">section - </span><span class="code-comment_grey">раздел сайта с заголовком, контентом.</span></li>
											<li><span class="code">aside - </span><span class="code-comment_grey">боковая панель (sidebar).</span></li>
											<li><span class="code">footer - </span><span class="code-comment_grey">«подвал» сайта или раздела.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<ul>
											<li class="query__example_list example-list_nav">Главная</li>
											<li class="query__example_list example-list_nav">О нас</li>
											<li class="query__example_list example-list_nav">Контакты</li>
										</ul>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_second">Flexbox</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;div&gt;<br>&emsp;&lt;img src="earth.svg"  alt="Earth"&gt;<br>&emsp;&lt;img src="sun.svg"  alt="The Sun"&gt;<br>&emsp;&lt;img src="moon.svg"  alt="The Moon"&gt;<br>&lt;/div&gt;</code><br>
										<code class="code">div {<br>&emsp;display: flex;<br>&emsp;justify-content: space-between;<br>}<br>img {<br>&emsp;width: 20%;<br>}</code>
										<p class="code-comment">Свойства <span class="code">display</span> и <span class="code"> justify-content</span> добавляют для родителя. Дочерние элементы ограничивают шириной.</p>
										<span class="code-comment">Значения<span class="code"> justify-content:</span></span>
										<ul class="code-list">
											<li><span class="code">flex-start - </span><span class="code-comment_grey">флексы прижаты к началу строки.</span></li>
											<li><span class="code">flex-end - </span><span class="code-comment_grey">флексы прижаты к концу строки.</span></li>
											<li><span class="code">center - </span><span class="code-comment_grey">выравнивание элементов по центру.</span></li>
											<li><span class="code">space-around - </span><span class="code-comment_grey">распределяются по всей строке с отступами справа и слева.</span></li>
											<li><span class="code">space-between - </span><span class="code-comment_grey">флексы распределяются по всей строке.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="query__example_flex">
											<img src="img/earth.svg" alt="Earth">
											<img src="img/sun.svg" alt="The Sun">
											<img src="img/moon.svg" alt="The Moon">
										</div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_third">Ссылка на элемент HTML</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">&lt;h3 id="flexbox-article"&gt;<span class="code_grey">Flexbox</span>&lt;/h3&gt;</code><br>
										<code class="code">&lt;a href="#flexbox-article"&gt;<span class="code_grey">Узнать больше о flexbox</span>&lt;/a&gt;</code>
										<p class="code-comment">В атрибут <span class="code">href</span> добавляют <span class="code"> # </span> и <span class="code"> id </span> элемента, на который осуществится переход по ссылке.</p>
									</div>
									<div class="query__example">
										<a href="#advanced-link_second">Узнать больше о flexbox</a>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_fourth">Фоновое изображение</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">div {<br>&emsp;width: 200px;<br>&emsp;height: 150px;<br>&emsp;border: 1px solid brown;<br>&emsp;background-image: url(house.svg);<br>&emsp;background-position: center bottom;<br>&emsp;background-size: 100px 75px;<br>&emsp;background-repeat: no-repeat;<br>}</code>
										<ul class="code-list">
											<li><span class="code">background-image - </span><span class="code-comment_grey">путь к файлу с изображением.</span></li>
											<li><span class="code">background-position - </span><span class="code-comment_grey">положение по горизонтали и вертикали относительно родителя.</span></li>
											<li><span class="code">background-size - </span><span class="code-comment_grey">ширина и высота фона.</span></li>
											<li><span class="code">background-repeat - </span><span class="code-comment_grey">повторение фонового изображения.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="query__example_background"></div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_fifth">Тень</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">img {<br>&emsp;border-radius: 50%;<br>&emsp;box-shadow: 2px 1px 35px 10px gold;<br>}</code>
										<span class="code-comment">Составляющие <span class="code">box-shadow</span> по данному примеру:</span>
										<ul class="code-list">
											<li><span class="code">2px - </span><span class="code-comment_grey">cмещение тени по горизонтали.</span></li>
											<li><span class="code">1px - </span><span class="code-comment_grey">cмещение тени по вертикали.</span></li>
											<li><span class="code">35px - </span><span class="code-comment_grey">размытие тени.</span></li>
											<li><span class="code">10px - </span><span class="code-comment_grey">растяжение тени.</span></li>
											<li><span class="code">gold - </span><span class="code-comment_grey">цвет.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<img class="query__example_shadow" src="img/sun.svg" alt="The Sun">
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_sixth">Градиент</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">button {<br>&emsp;border: none;<br>&emsp;border-radius: 16px;<br>&emsp;padding: 10px 20px 10px 20px;<br>&emsp;background: linear-gradient(to top, violet, purple);<br>&emsp;cursor: pointer;<br>}</code>
										<span class="code-comment">Градиент - плавный переход от одного цвета к другому</span>
										<ul class="code-list">
											<li><span class="code">to top - </span><span class="code-comment_grey">направление градиента.</span></li>
											<li><span class="code">violet - </span><span class="code-comment_grey">начальный цвет.</span></li>
											<li><span class="code">purple - </span><span class="code-comment_grey">конечный цвет.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<button class="query__example_gradient">Отправить</button>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_seventh">Свойство display</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">li {<br>&emsp;display: inline-block;<br>&emsp;padding-right: 5px;<br>}</code>
										<span class="code-comment">Значения свойства display:</span>
										<ul class="code-list">
											<li><span class="code">block - </span><span class="code-comment_grey">элемент отображается как блочный.</span></li>
											<li><span class="code">inline - </span><span class="code-comment_grey">элемент становится строчным.</span></li>
											<li><span class="code">inline-block - </span><span class="code-comment_grey">способ сделать элемент строчным, но сохранить его "блочные" возможности: ширина, высота и отступы.</span></li>
											<li><span class="code">none - </span><span class="code-comment_grey">удаляет элемент из документа.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<ul>
											<li class="query__example_list">Главная</li>
											<li class="query__example_list">Продукция</li>
											<li class="query__example_list">Контакты</li>
										</ul>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_eighth">Выравнивание блока</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">ul {<br>&emsp;width: 100px;<br>&emsp;margin: 0 auto 0 auto;<br>}</code>
										<p class="code-comment">Если строчный элемент нужно выровнять по центру, можно его преобразовать в блочный элемент через <span class="code">display: block;</span></p>
									</div>
									<div class="query__example block-align">
										<ul class="query__example_color block-align__list">
											<li>Июнь</li>
											<li>Июль</li>
											<li>Август</li>
										</ul>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_nineth">Абсолютное позиционирование</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">div {<br>&emsp;position: relative;<br>&emsp;border: 1px solid brown;<br>}<br></code>
										<code class="code">.sun-img {<br>&emsp;position: absolute;<br>&emsp;z-index: 1;<br>&emsp;top: 0;<br>&emsp;left: 0;<br>}</code><br>
										<code class="code">.earth-img {<br>&emsp;position: absolute;<br>&emsp;z-index: 2;<br>&emsp;top: 8px;<br>&emsp;left: 10px;<br>}</code><br>
										<span class="code-comment">Если у родительского элемента <span class="code">position: relative;</span>, у дочерних элементов <span class="code">position: absolute;</span>, последние "вырываются" из потока и размещаются относительно родителя.</span>
										<ul class="code-list">
											<li><span class="code">top - </span><span class="code-comment_grey">расстояние от верхней границы родителя.</span></li>
											<li><span class="code">left - </span><span class="code-comment_grey">расстояние от левой границы родителя.</span></li>
											<li><span class="code">z-index - </span><span class="code-comment_grey">чем больше, тем выше находится элемент по сравнению с другими позиционируемыми элементами.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="query__example_position">
											<img class="sun-img" src="img/sun.svg" alt="The Sun">
											<img class="earth-img" src="img/earth.svg" alt="Earth">
										</div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_tenth">Псевдоклассы</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">a {<br>&emsp;color: royalblue;<br>&emsp;text-decoration: none;<br>}</code><br>
										<code class="code">a:hover {<br>&emsp;color: purple;<br>&emsp;text-decoration: underline;<br>}</code>
										<span class="code-comment">Переопределяют свойства и значения CSS. Например, при клике, наведении мышью и т.д.</span>
										<ul class="code-list">
											<li><span class="code">:link - </span><span class="code-comment_grey">ссылка, еще не посещенная пользователем.</span></li>
											<li><span class="code">:visited - </span><span class="code-comment_grey">посещенная ссылка.</span></li>
											<li><span class="code">:hover - </span><span class="code-comment_grey">при наведении курсора мыши.</span></li>
											<li><span class="code">:focus - </span><span class="code-comment_grey">при фокусе на элемент (например, ввод в input).</span></li>
											<li><span class="code">:active - </span><span class="code-comment_grey">при активации элемента (например, после щелчка мыши).</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<a class="query__example_hover" href="">Ссылка на статью</a>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_eleventh">Псевдоэлементы ::before и ::after</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">a {<br>&emsp;position: relative;<br>}</code><br>
										<code class="code">a::before {<br>&emsp;position: absolute;<br>&emsp;content: "";<br>&emsp;top: 0;<br>&emsp;left: -25px;<br>&emsp;width: 15px;<br>&emsp;height: 15px;<br>&emsp;background: url(video.svg) no-repeat;<br>}</code>
										<span class="code-comment">Добавляют контент для определённого элемента. Часто используются при создании иконок.</span>
										<ul class="code-list">
											<li><span class="code">::before - </span><span class="code-comment_grey">добавление контента перед элементом.</span></li>
											<li><span class="code">::after - </span><span class="code-comment_grey">добавление контента после элемента.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<a class="query__example_pseudo" href="#advanced-link_tenth">Загрузить видео</a>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_twelfth">Transition</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">.img-moon {<br>&emsp;width: 20%;<br>&emsp;transition-property: width;<br>&emsp;transition-duration: 1s;<br>}</code><br>
										<code class="code">.img-moon:hover {<br>&emsp;width: 30%;<br>}</code>
										<span class="code-comment">Смена одних значений другими через заданный промежуток времени.</span>
										<ul class="code-list">
											<li><span class="code">transition-property - </span><span class="code-comment_grey">изменяемое свойство CSS.</span></li>
											<li><span class="code">transition-duration - </span><span class="code-comment_grey">длительность смены стилей.</span></li>
											<li><span class="code">transition-delay - </span><span class="code-comment_grey">задержка запуска transition.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="transition-wrap">
											<img class="query__example_transition" src="img/moon.svg" alt="The Moon">
										</div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_thirteenth">Анимация</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">.img-sun {<br>&emsp;position: absolute;<br>&emsp;bottom: 0;<br>&emsp;left: 20%;<br>&emsp;animation-name: sunRise;<br>&emsp;animation-duration: 15s;<br>&emsp;animation-iteration-count: infinite;<br>}</code><br>
										<code class="code">@keyframes sunRise {<br>&emsp;0% {<br>&emsp;&emsp;bottom: 0;<br>&emsp;&emsp;left: 20%;<br>&emsp;}<br>&emsp;50% {<br>&emsp;&emsp;bottom: 60%;<br>&emsp;&emsp;left: 50%;<br>&emsp;}<br>&emsp;100% {<br>&emsp;&emsp;bottom: 0;<br>&emsp;&emsp;left: 20%;<br>&emsp;}<br>}</code>
										<span class="code-comment">Создание анимации проходит в два этапа:</span>
										<ul class="code-list">
											<li><span class="code">@keyframes - </span><span class="code-comment_grey">смена стилей от начала до конца анимации.</span></li>
											<li><span class="code">animation - </span><span class="code-comment_grey">установка параметров анимации:</span></li>
										</ul>
										<ul class="code__sublist">
											<li class="code_circle"><span class="code">animation-name - </span><span class="code-comment_grey">имя анимации.</span></li>
											<li class="code_circle"><span class="code">animation-duration - </span><span class="code-comment_grey">длительность анимации.</span></li>
											<li class="code_circle"><span class="code">animation-timing-function - </span><span class="code-comment_grey">скорость анимации.</span></li>
											<li class="code_circle"><span class="code">animation-iteration-count - </span><span class="code-comment_grey">сколько раз должна быть воспроизведена.</span></li>
										</ul>	
									</div>
									<div class="query__example">
										<div class="animation-wrap">
											<img class="query__example_animation" src="img/sun.svg" alt="The Sun">
										</div>
									</div>
								</div><hr>
								<h3 class="main-subtitle" id="advanced-link_fourteenth">Медиа-запросы</h3>
								<div class="query">
									<div class="query__code">
										<code class="code">span {<br>&emsp;color: purple;<br>}</code><br>
										<code class="code">@media (max-width: 700px) {<br>&emsp;span {<br>&emsp;&emsp;color: orange;<br>&emsp;}<br>}</code><br>
										<p class="code-comment">Изменение стилей в зависимости от ширины экрана</p>
										<ul class="code-list">
											<li><span class="code">max-width: 500px - </span><span class="code-comment_grey">применение стилей до 500px.</span></li>
											<li><span class="code">min-width: 500px - </span><span class="code-comment_grey">применение стилей от 500px и выше</span></li>
										</ul>
									</div>
									<div class="query__example">
										<span class="query__example_media">Какой у текста цвет: фиолетовый или оранжевый?</span>
									</div>
								</div>
							</div>	
						</section>
						<section id="files-table" class="section-tab" hidden>
							<div class="files-table-tab">
								<h3 class="main-subtitle" id="files-link_first">HTML-код без таблицы и формы</h3>
								<div class="query">
									<ul>
										<li class="files-list files-download"><a href="download/examples/html_basic.html" download>Загрузить файл</a></li>
										<li class="files-list files-site"><a href="example/html_basic.html" target="_blank">Открыть готовый пример</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_second">HTML-код c таблицей и формой</h3>
								<div class="query">
									<ul>
										<li class="files-list files-download"><a href="download/examples/html_full.zip" download>Загрузить архив</a></li>
										<li class="files-list files-site"><a href="example/html_full/index.html" target="_blank">Открыть готовый пример</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_third">HTML и CSS</h3>
								<div class="query">
									<ul>
										<li class="files-list files-download"><a href="download/examples/html_css.zip" download>Загрузить архив</a></li>
										<li class="files-list files-site"><a href="example/html_css/index.html" target="_blank">Открыть готовый пример</a></li>
									</ul>
								</div><hr>
								<!-- <h3 class="main-subtitle" id="files-link_fourth">Домашнее задание - 1</h3>
								<div class="query">
									<ul>
										<li class="files-list files-home"><a href="download/task/html_basic.zip" download>Альпы</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/DUcth2UAqRM" target="_blank">Видеоинструкция (ссылка на YouTube)</a></li>
									</ul>
								</div><hr> -->
								<h3 class="main-subtitle" id="files-link_fifth">Домашнее задание - 1</h3>
								<div class="query">
									<ul>
										<li class="files-list files-home"><a href="download/task/html_advanced.zip" download>Путёвка на Марс</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/922QcqoYhI0" target="_blank">Видеоинструкция (ссылка на YouTube)</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_sixth">Домашнее задание - 2</h3>
								<div class="query">
									<ul>
										<li class="files-list files-home"><a href="download/task/css.zip" download>Мороженое</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/v1BZayNfJIE" target="_blank">Видеоинструкция (ссылка на YouTube)</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_seventh">Макеты</h3>
								<div class="query">
									<ol>
										<li class="files-list_ordered">
											<p class="files-text">1. Моё лето (легкий уровень)<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-download"><a href="download/mockup/easy_mockup.jpg" download>Макет сайта</a></li>
												<li class="files-list files-download"><a href="download/mockup/easy.zip" download>Изображения и текст</a></li>
											</ul>
										</li>
										<li class="files-list_ordered">
											<p class="files-text">2. Светофор (средний уровень)<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-download"><a href="download/mockup/medium_mockup.jpg" download>Макет сайта</a></li>
												<li class="files-list files-download"><a href="download/mockup/medium.zip" download>Изображения и текст</a></li>
											</ul>
										</li>
										<li class="files-list_ordered">
											<p class="files-text">3. Тур в Америку (тяжёлый уровень)<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-download"><a href="download/mockup/hard_mockup.jpg" download>Макет сайта</a></li>
												<li class="files-list files-download"><a href="download/mockup/hard.zip" download>Изображения и текст</a></li>
											</ul>
										</li>
									</ol>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_eighth">Тесты</h3>
								<div class="query">
									<ul>
										<li class="files-list quiz-site"><a href="quiz/test1.html">Вариант - 1</a></li>
										<li class="files-list quiz-site"><a href="quiz/test2.html">Вариант - 2</a></li>
										<li class="files-list quiz-site"><a href="quiz/quick-test.html">Тест на время</a></li>
										<li class="files-list quiz-site"><a href="quiz/practice.html">Практические задания</a></li>
										<li class="files-list quiz-site quiz-site__devtools"><a href="quiz/devtools-test.html">Тест в DevTools</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_nineth">Примеры готовых сайтов</h3>
								<div class="query">
									<ol>
										<li class="files-list_ordered">
											<p class="files-text">1. Облегчённая версия<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-site"><a href="https://vitaliyhtml5.github.io/lightelephant" target="_blank">lightelephant</a></li>
												<li class="files-list files-download"><a href="download/examples/lightelephant.zip" download>Загрузить архив</a></li>
											</ul>
										</li>
										<!-- <li class="files-list_ordered">
											<p class="files-text">2. Полная версия<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-site"><a href="https://vitaliyhtml5.github.io/elephant" target="_blank">elephant</a></li>
												<li class="files-list files-download"><a href="download/examples/fullelephant.zip" download>Загрузить архив</a></li>
											</ul>
										</li> -->
										<li class="files-list_ordered">
											<p class="files-text">2. Полная версия<span class="arrow-down"></span></p>
											<ul class="files-all hidden">
												<li class="files-list files-site"><a href="https://vitaliyhtml5.github.io/africa" target="_blank">africa</a></li>
												<li class="files-list files-download"><a href="download/examples/real_site.zip" download>Загрузить архив</a></li>
											</ul>
										</li>
									</ol>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_tenth">Поиск багов</h3>
								<div class="query">
									<ul>
										<li class="files-list files-site"><a href="https://vitaliyhtml5.github.io/bugs" target="_blank">Сайт с ошибками</a></li>
										<li class="files-list files-download"><a href="download/bugs/documentation.zip" download>Документация</a></li>
									</ul>
								</div><hr>
								<h3 class="main-subtitle" id="files-link_eleventh">Видеоуроки (ссылки на YouTube)</h3>
								<div class="query">
									<ul>
										<li class="files-list files-video"><a href="https://youtu.be/LfAGFvwQXAw" target="_blank">Знакомство с Sublime Text 3</a></li>
										<li class="files-list files-video"><a href="https://www.youtube.com/watch?v=zd_QkX8r6kk" target="_blank">Работа с Инструментом разработчика (DevTools)</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/xSVp6hnlmIw" target="_blank">Подключение шрифтов через Google Fonts</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/pYpJxF1-DoA" target="_blank">Свойство display</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/dKmAMF_Phl0" target="_blank">Выравнивание блока по центру</a></li>
										<li class="files-list files-video"><a href="https://youtu.be/hl5LV_attBk" target="_blank">Навигация по элементам сайта</a></li>
									</ul>
								</div>
							</div>		
						</section>
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
	<script src="script.js"></script>
</body>
</html>