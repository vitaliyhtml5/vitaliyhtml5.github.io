fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=bfc01abb9d07f1618283f28a3e24c038')
	.then(function(resp) {return resp.json();})
	.then(function(data) {console.log(data);
		let city = document.querySelector('.city');
		let iconBg = document.querySelector('.icon-weather').style;
		let icon = data.weather[0]['description'];
		let temperature = document.querySelector('.weather-temp');
		let humidity = document.querySelector('.weather-humidity');
		let wind = document.querySelector('.weather-wind');
		let sunRise = document.querySelector('.sun-rise');
		let sunSet = document.querySelector('.sun-set');

		city.innerText = data.name;
		temperature.innerHTML = Math.round(data.main.temp - 273) + '<span class="weather-temp_grade">&#8451;</span>';
		humidity.innerText = `${data.main.humidity}  %`;
		wind.innerText = `${data.wind.speed}  m/s`;
		sunRise.innerText = convertTime(data.sys.sunrise);
		sunSet.innerText = convertTime(data.sys.sunset);

		if (icon == 'clear sky') {
			iconBg.backgroundImage = 'url(img/sunny.svg)';
		}
		else if (icon == 'scattered clouds' || icon == 'broken clouds' || icon == 'mist') {
			iconBg.backgroundImage = 'url(img/cloudy.svg)';
		}	
		else if (icon == 'rain' || icon == 'shower rain' || icon == 'thunderstorm' ) {
			iconBg.backgroundImage = 'url(img/rainy.svg)';
		}
		else if (icon == 'snow') {
			iconBg.backgroundImage = 'url(img/snowy.svg)';
		}
		else {
			iconBg.backgroundImage = 'url(img/partly-cloudy.svg)';
		}

		function convertTime(sendTime) {
			let timezone = data.timezone - 10800;

			let date = new Date( (sendTime + timezone) * 1000);
			let hours = date.getHours();
			let minutes = "0" + date.getMinutes();
			let getTime = hours + ':' + minutes.substr(-2);
			return getTime;
		}
	})

	.catch(function() {
		console.log('error');
	});


