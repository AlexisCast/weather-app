const request = require("postman-request");

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${process.env.API_KEY_MAPS}`;
	request({ url, url }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services!", undefined);
		} else if (JSON.parse(response.body).features.length === 0) {
			callback("Unable to find location. Try another search", undefined);
		} else {
			const data = JSON.parse(response.body);
			const latitud = data.features[0].center[1];
			const longitud = data.features[0].center[0];
			const location = data.features[0].place_name;
			callback(undefined, { longitud, latitud, location });
		}
	});
};

module.exports = geocode;
