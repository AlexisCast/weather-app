const dotenv = require("dotenv");
dotenv.config();
const geocode = require("./utils/goecode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
	console.log("No address was provided");
} else {
	geocode(address, (error, data) => {
		if (error) {
			return console.log("Error", error);
		}
		forecast(data.latitud, data.longitud, (error, forecatData) => {
			if (error) {
				return console.log("Error", error);
			}
			console.log(data.location);
			console.log(forecatData);
		});
	});
}
