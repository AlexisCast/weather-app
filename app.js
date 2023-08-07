const dotenv = require("dotenv");
dotenv.config();
const geocode = require("./utils/goecode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
	console.log("No address was provided");
} else {
	geocode(address, (error, { latitud, longitud, location }) => {
		if (error) {
			return console.log("Error", error);
		}
		forecast(latitud, longitud, (error, forecatData) => {
			if (error) {
				return console.log("Error", error);
			}
			console.log(location);
			console.log(forecatData);
		});
	});
}
