const dotenv = require("dotenv");
dotenv.config();
const request = require("postman-request");

const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY_WEATHER}&q=37.8267,-122.4233`;

request({ url: url }, (error, response) => {
	if (error) {
		console.log("no internet or some error");
	} else if (JSON.parse(response.body).error) {
		console.log("Thre is some error type");
		console.log(JSON.parse(response.body).error);
	} else {
		const data = JSON.parse(response.body);
		const currentData = data.current;
		console.log(
			"It is currently " +
				currentData.temp_f +
				"F degrees out. There is a " +
				currentData.wind_mph +
				" mph of wind."
		);
	}
});

const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.API_KEY_MAPS}`;

request({ url: geoCodeURL }, (error, response, body) => {
	if (error) {
		console.log("no internet or some error");
	} else if (JSON.parse(response.body).features.length === 0) {
		console.log("Unable to find location. Try another search");
	} else {
		const data = JSON.parse(response);
		console.log(data);
		console.log("---------------------");
		console.log(data.features[0].center);
		const latitud = data.features[0].center[1];
		const longitud = data.features[0].center[0];
		console.log(longitud, latitud);
	}
});
