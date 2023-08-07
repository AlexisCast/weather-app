const dotenv = require("dotenv");
dotenv.config();
const geocode = require("./utils/goecode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
	console.log("Error", error);
	console.log("Data", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
	console.log("Error", error);
	console.log("Data", data);
});
