const tabs = [
{},
{
	name: 'css',
	content: `<div class="css-table-tab">
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
			</div>`,
},
{
	name: 'advanced_css',
	content: ``,
},
{
	name: 'files',
	content: `<div class="files-table-tab">
				<h2 class="main-title">Полезные ссылки</h2>
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
				<h3 class="main-subtitle" id="files-link_eighth">Тесты</h3>
				<div class="query">
					<ul>
						<li class="files-list quiz-site"><a href="quiz/test1.html">Вариант - 1</a></li>
						<li class="files-list quiz-site"><a href="quiz/test2.html">Вариант - 2</a></li>
					</ul>
				</div><hr>
				<h3 class="main-subtitle" id="files-link_eleventh">Видеоуроки (ссылки на YouTube)</h3>
				<div class="query">
					<ul>
						<li class="files-list files-video"><a href="https://youtu.be/LfAGFvwQXAw" target="_blank">Знакомство с Sublime Text 3</a></li>
						<li class="files-list files-video"><a href="https://www.youtube.com/watch?v=zd_QkX8r6kk" target="_blank">Работа с Инструментом разработчика (DevTools)</a></li>
					</ul>
				</div>
			</div>`,
},


]