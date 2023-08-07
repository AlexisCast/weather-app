const request = require("postman-request");

const forecast = (latitud, longitud, callback) => {
	const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY_WEATHER}&q=${longitud},${latitud}`;
	request({ url: url }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (JSON.parse(response.body).error) {
			callback(
				"Unable to find location. Try another search",
				JSON.parse(response.body).error
			);
		} else {
			const data = JSON.parse(response.body);
			const currentData = data.current;
			callback(
				undefined,
				"It is currently " +
					currentData.temp_f +
					"F degrees out. There is a " +
					currentData.wind_mph +
					" mph of wind."
			);
		}
	});
};

module.exports = forecast;
